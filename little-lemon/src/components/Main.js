import React, { useState, useReducer } from 'react';
import CallToAction from "./CallToAction";
import CustomersSay from "./CustomersSay";
import Homepage from "./Homepage";
import Chicago from "./Chicago";
import BookingForm from "./BookingForm";

function Main() {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: 1,
        occasion: ''
    });

    const updateTimes = (state, action) => {
        // Return the same available times regardless of the date for now
        return state;
    };

    const initializeTimes = () => [
        '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
    ];

    const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, [], initializeTimes);

    const onFormChange = (newFormData) => {
        setFormData(newFormData);
    };

    return (
        <main>
            <CallToAction />
            <Homepage />
            <BookingForm
                formData={formData}
                onFormChange={onFormChange}
                availableTimes={availableTimes}
                dispatchAvailableTimes={dispatchAvailableTimes}
            />
            <CustomersSay />
            <Chicago />
        </main>
    );
}

export default Main;
