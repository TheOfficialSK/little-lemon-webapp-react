import React from 'react';

function BookingForm({ formData, onFormChange, availableTimes, dispatchAvailableTimes }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', formData);
    };

    const handleChange = (event) => {
        onFormChange({
            ...formData,
            [event.target.id]: event.target.value,
        });

        // Dispatch the state change when the date form field is changed
        if (event.target.id === 'res-date') {
            dispatchAvailableTimes(event.target.value);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={formData.date}
                onChange={handleChange}
            />
            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={formData.time}
                onChange={handleChange}
            >
                {availableTimes.map((availableTime) => (
                    <option key={availableTime} value={availableTime}>
                        {availableTime}
                    </option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={formData.guests}
                onChange={handleChange}
            />
            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={formData.occasion}
                onChange={handleChange}
            >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    );
}

export default BookingForm;
