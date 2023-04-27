import React, { useState, useReducer } from 'react';
import CallToAction from "./CallToAction";
import CustomersSay from "./CustomersSay";
import Homepage from "./Homepage";
import Chicago from "./Chicago";
import BookingPage from "./BookingPage";
import {fetchAPI, submitAPI} from '../api.js';
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

    return (
        <main>
            <CallToAction />
            <Homepage />
            <BookingPage
                formData={formData}
                onFormChange={onFormChange}
                availableTimes={availableTimes}
                dispatchAvailableTimes={dispatchAvailableTimes}
            />
            <ConfirmedBooking />
            <CustomersSay />
            <Chicago />
        </main>
    );
}

export default Main;
