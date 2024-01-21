import ReservationsForm from "./ReservationsForm";

function Reservations(props) {
    return (
        <>
            <ReservationsForm availableTimes={props.availableTimes} dispatch={props.dispatch} SubmitForm={props.SubmitForm} />
        </>
    )
}

export default Reservations;
