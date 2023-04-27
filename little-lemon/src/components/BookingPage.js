import React, { useState } from 'react';
import BookingForm from './BookingForm';

function BookingPage() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');

    return (
        <div id={"BookingPage"} className={"booking-page"}>
            <BookingForm
                date={date}
                setDate={setDate}
                time={time}
                setTime={setTime}
                guests={guests}
                setGuests={setGuests}
                occasion={occasion}
                setOccasion={setOccasion}
            />
        </div>
    );
}

export default BookingPage;
