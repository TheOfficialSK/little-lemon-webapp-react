import React, { useState, useReducer } from 'react';
import CallToAction from "./CallToAction";
import CustomersSay from "./CustomersSay";
import Homepage from "./Specials";
import Chicago from "./Chicago";
import BookingPage from "./BookingPage";
import { fetchAPI, submitAPI } from '../api.js';
import ConfirmedBooking from "./ConfirmedBooking";

function Main() {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: 1,
        occasion: ''
    });

    const updateTimes = (state, action) => {
        fetchAPI(state.date).then((times) => {
            return times;
        })
    };

    const today = fetchAPI(new Date());
    const initializeTimes = () => [...today];

    const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, [], initializeTimes);

    const onFormChange = (newFormData) => {
        setFormData(newFormData);
    };

    const [bookingConfirmed, setBookingConfirmed] = useState(false);

    const submitForm = async (formData) => {
        const success = await submitAPI(formData);

        if (success) {
            setBookingConfirmed(true);
        }
    };

    return (
        <main>
            <CallToAction />
            <Homepage />
            {!bookingConfirmed ? (
                <BookingPage
                    formData={formData}
                    onFormChange={onFormChange}
                    availableTimes={availableTimes}
                    dispatchAvailableTimes={dispatchAvailableTimes}
                    submitForm={submitForm}
                />
            ) : (
                <ConfirmedBooking formData={formData} />
            )}
            <CustomersSay />
            <Chicago />
        </main>
    );
}
export default Main;
