import axios from "axios";
import { getAccessToken, googleAuthConfig, updateResource } from "./api/api";
import { CronJob } from "cron";
import Swal from "sweetalert2";

interface CalendarEvent {
    id_google_calendar: any
    start_date: string
    end_date: string
    resource_id: any
    data: any
    action: string
    eventId?: string
}

export async function eventsToCalendar(detailEvents: CalendarEvent): Promise<string> {
    return new Promise(async (resolve, reject) => {
    const event = {
        summary: 'Bloqueado',
        description: 'Bloqueo de fecha desde MFR',
        location: 'Colombia',
        start: {
            dateTime: `${detailEvents.start_date}T00:00:00` ?? '',
            timeZone: 'America/Bogota'
        },
        end: {
            dateTime: `${detailEvents.end_date}T23:59:59` ?? '',
            timeZone: 'America/Bogota'
        },
        // recurrence: ['RRULE:FREQ=DAILY;COUNT=1'],
        attendees: [
            { email: process.env.NEXT_PUBLIC_MAILER_SENDER as string, displayName: 'MFR'}
        ],
        sendNotifications: true,
        reminders: {
            useDefault: false,
            overrides: [
                { method: 'email', minutes: 24 * 60 },
                { method: 'popup', minutes: 10 }
            ]
        }
    };
    // console.log(detailEvents.action)

        try {
            const res = await googleAuthConfig();
            if (res.data.accessToken) {
                if(detailEvents.action === 'block'){
                    const result = await sendEvent(res.data.accessToken, event, detailEvents.id_google_calendar, process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_API_KEY as string, detailEvents);
                    resolve(result); // Resuelve con el resultado
                }else{
                    const result = await deleteEvent(res.data.accessToken, detailEvents, process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_API_KEY as string)
                    resolve(result);
                }
                // console.log('ID del Evento:', result);
            } else {
                console.log('Error: No hay token de acceso');
                reject(new Error('Error: No hay token de acceso')); // Rechaza con un error
            }
        } catch (e) {
            console.log('Error:', e);
            reject(e); // Rechaza con el error
        }

    });
}

export async function sendEvent(accessToken: string, event: any, calendarId: string, apiKey: string, detailEvents: CalendarEvent){
    const settings = {
        method: 'post',
        url: `https://www.googleapis.com/calendar/v3/calendars/${detailEvents.id_google_calendar}/events?sendNotifications=true&sendUpdates=all&key=${apiKey}`,
        headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        data: event
    };
    try {
        const response = await axios(settings);
        // console.log('Respuesta:', response.data.id);
        return response.data.id;
    } catch (error) {
        console.log('Error:', error);
        throw error;
    }
}

export async function deleteEvent(accessToken: string, detailEvents: CalendarEvent, apiKey: string) {
    const settings = {
        method: 'delete',
        url: `https://www.googleapis.com/calendar/v3/calendars/${detailEvents.id_google_calendar}/events/${detailEvents.eventId}?key=${apiKey}`,
        headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await axios(settings);
        return response.data;
    } catch (error) {
        console.log('Error:', error);
        throw error;
    }
}

export async function getEventsCalendar(chars: any, booking: any, cookie: any) {
    // console.log("chars => ", chars)
    // console.log("booking => ", booking)
    // console.log('cookies => ', cookie)
    const apiKey = process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_API_KEY as string;

    try{
        await getAccessToken().then(async (res:any) => {
            const urlGoogleEvent = `https://www.googleapis.com/calendar/v3/calendars/${booking.calendar_id}/events?timeMin=${cookie.startDate as string}&timeMax=${cookie.endDate as string}&key=${apiKey}`;
            try {
                const response = await axios.get(urlGoogleEvent, {
                headers: {
                    Authorization: `Bearer ${res.data.accessToken as string}`,
                    Accept: 'application/json'
                }
                });
                if(response.data.items === 0){
                    return true
                }else{
                    return false
                }

            } catch (error) {
                console.error('Error to get events for calendarId: ', error);
                return false
            }
        })
    }catch(Error){
        console.log(Error)
        return false
    }
}