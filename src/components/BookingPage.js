import React from 'react';
import BookingForm from './BookingForm';
import './styles/BookingPage.css';

function BookingPage({ formData, onFormChange, availableTimes, dispatchAvailableTimes, submitForm }) {
    return (
        <div id={"BookingPage"}>
            <section className={"reservations"}>
                <h1 className={"form-header"}>Make a Reservation</h1>
                <BookingForm
                    formData={formData}
                    onFormChange={onFormChange}
                    availableTimes={availableTimes}
                    dispatchAvailableTimes={dispatchAvailableTimes}
                    submitForm={submitForm}
                />
            </section>
        </div>
    );
}

export default BookingPage;
