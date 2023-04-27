import React, { useState, useReducer } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import CallToAction from "./CallToAction";
import CustomersSay from "./CustomersSay";
import Homepage from "./Homepage";
import Chicago from "./Chicago";
import BookingPage from "./BookingPage";
import { fetchAPI, submitAPI } from '../api.js';
import ConfirmedBooking from "./ConfirmedBooking";
import { useNavigate } from 'react-router-dom';

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

    const navigate = useNavigate();

    const submitForm = async (formData) => {
        const success = await submitAPI(formData);

        if (success) {
            navigate('/booking-confirmed');
        }
    };

    return (
        <main>
            <CallToAction />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/home" element={<Homepage />} />
                <Route path="/BookingPage" element={
                    <BookingPage
                        formData={formData}
                        onFormChange={onFormChange}
                        availableTimes={availableTimes}
                        dispatchAvailableTimes={dispatchAvailableTimes}
                        submitForm={submitForm}
                    />
                } />
                <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
                <Route path="*" element={<Outlet />} />
            </Routes>
            <CustomersSay />
            <Chicago />
        </main>
    );
}

export default Main;
