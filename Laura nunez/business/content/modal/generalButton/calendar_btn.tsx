import React from "react";
import ModalCalendar from "../content/modal_calendar";
import useAnalyticsEventTracker from "../../../../service/analytics/useAnalyticsEventTracker";

interface ButtonProps {
    text: string;
    className?: string;
    version?: string;
    id: string;
}
export const ModalScheduleButton: React.FC<ButtonProps> = ({text, className, id}) => {
    const [modalOpen, setModalOpen] = React.useState(false);
    const gaEventTracker = useAnalyticsEventTracker('Inicio');

    const analytic = () => {
        if(id==="1 Artístico" || id==="2 Artístico" || id==="1 Social" || id==="2 Social"){
            gaEventTracker(`btn agendar cita ${id}`);
        }else{
            gaEventTracker(`inicio: btn agendar cita ${id}`);
        }

        setModalOpen(!modalOpen)
    }

    return (
        <>
            <button
                className={className}
                onClick={analytic}
            >
                {text}
            </button>
            <ModalCalendar
                setModalOpen={setModalOpen}
                modalOpen={modalOpen}
                gaEventTracker={gaEventTracker}
                title={"Agendar cita"}
            />
        </>
    );
};
