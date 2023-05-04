import './styles/ConfirmedBooking.css';

function ConfirmedBooking({ formData }) {
    return (
        <div id={"ConfirmedBooking"}>
            <section className={"reservation"}>
                <h1 className={"confirmation"}>Reservation Confirmed</h1>

                <p className={"Confirm-message"}>We'll see you soon! We got your reservation for {formData.date} at {formData.time} for {formData.guests} guests</p>
                <p className={"confirm-message"}>Please add the reservation to your calendar!</p>
            </section>
        </div>
    );
}

export default ConfirmedBooking;
