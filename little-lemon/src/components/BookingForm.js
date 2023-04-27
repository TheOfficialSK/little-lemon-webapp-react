import React from 'react';
import './styles/BookingForm.css';

function BookingForm({ formData, onFormChange, availableTimes, dispatchAvailableTimes }) {
    const handleSubmit = (event) => {
        formData.date = new Date();
        event.preventDefault();
        console.log('Form submitted:', formData);
    };


    const handleChange = (event) => {
        const target = event.target;
        const name = target.id;
        const value = target.type === 'date' ? target.value : target.value;


        onFormChange({
            ...formData,
            [name]: value,
        });

        // Dispatch the state change when the date form field is changed
        if (event.target.id === 'res-date') {
            dispatchAvailableTimes(event.target.value);
        }
    };

    const handleTimeClick = (time) => {
        onFormChange({
            ...formData,
            time,
        });
    };

    return (
        <form onSubmit={handleSubmit} style={{gap: "20px" }}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                defaultValue={formData.date}
                onChange={handleChange}
            />

            <label>Choose time</label>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                {availableTimes.map((availableTime) => (
                    <button className={"time"}
                        key={availableTime}
                        type="button"
                        onClick={() => handleTimeClick(availableTime)}
                        style={{
                            backgroundColor: formData.time === availableTime ? '#f4ce14' : 'black',
                            color: formData.time === availableTime ? 'black' : 'white',
                        }}
                    >
                        {availableTime}
                    </button>
                ))}
            </div>
            <label htmlFor="guests">Number of guests</label>
            <input className={"slider"}
                type="range"
                min="1"
                max="10"
                step="1"
                id="guests"
                value={formData.guests}
                onChange={handleChange}
            />
            <p className={"guests"}>{formData.guests} guests</p>
            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={formData.occasion}
                onChange={handleChange}
            >
                <option value="occasion" disabled>Select an occasion</option>
                <option value="Birthday">Birthday</option>
                <option value={"Engagement"}>Engagement</option>
                <option value="Anniversary">Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    );
}

export default BookingForm;
