import config from "../../infrastructure/config";
import {createBooking, PostDataResources} from "./types";
import http from "./http-common";
import axios from "axios";
import {Cookies} from "react-cookie";
import {useState} from "react";

const pathResource='/api/v1/resource';
const pathBooking='/api/v1/booking';
const pathPayment='/api/v1/payment';

/*GET DATA API WITH AXIOS*/
export function useAllResources() {
    const [dataJson, setDataJson] = useState<Array<any>>([]);
    const configuration = {
        method: 'get',
        url: config.API_URL+pathResource,
        headers: {
            xsrfCookie: 'tenant=MFRDEV',
        },
        withCredentials: true
    }
    const getAll = async () => {

        axios.request(configuration).then((response) => {
            //console.log(response.data);
            setDataJson(response.data.data);
            return response.data;

        }).catch((error) => {
            console.log(error);
        })
    }
    return [dataJson, getAll] as const;
}

/* CREATE RESOURCE */
export function postResource (data: PostDataResources){

    return http.post<PostDataResources>(pathResource, data);
};

/*GET DATA API WITH AXIOS*/
export function getAllResourcesAvailable() {

    return http.get<PostDataResources>(`${pathResource}/search?status=Available`);

}
/* GET RESOURCE BY STATUS AVILABLE AND CODE */
export function getResource(code: string) {

    return http.get<PostDataResources>(`${pathResource}/search?status=Available&resource_id=${code}`);
}

/* UPDATE RESOURCE BY CODE */
export function updateResource(code: any, data: PostDataResources ) {

    return http.put<any>(`${pathResource}/${code}`, data);
}

// Booking Module //
export function postBooking(data: createBooking) {
    return http.post<createBooking>(pathBooking, data);
}

export function getBooking(code: string, startDate: string, dni: string){
    return http.get<createBooking>(`${pathBooking}?booking_code=${code}&start_date=${startDate}&dni=${dni}`)
}

export function getBookingAvailable(code: string, startDate: string){
    return http.get<createBooking>(`${pathBooking}/availability/${code}?start=${startDate}`)
}
