import React, { useState } from 'react';
import './BookingForm.css';

function BookingForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        guests: 1,
        requests: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Booking details:", formData);
        alert("Booking submitted successfully!");
        setFormData({
            name: '',
            email: '',
            date: '',
            time: '',
            guests: 1,
            requests: ''
        });
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <h2>Table Booking</h2>
            <label>
                Name:
                <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                />
            </label>
            <label>
                Email:
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                />
            </label>
            <label>
                Date:
                <input 
                    type="date" 
                    name="date" 
                    value={formData.date} 
                    onChange={handleChange} 
                    required 
                />
            </label>
            <label>
                Time:
                <input 
                    type="time" 
                    name="time" 
                    value={formData.time} 
                    onChange={handleChange} 
                    required 
                />
            </label>
            <label>
                Number of Guests:
                <input 
                    type="number" 
                    name="guests" 
                    value={formData.guests} 
                    onChange={handleChange} 
                    min="1" 
                    required 
                />
            </label>
            <label>
                Special Requests:
                <textarea 
                    name="requests" 
                    value={formData.requests} 
                    onChange={handleChange} 
                />
            </label>
            <button type="submit">Book Now</button>
        </form>
    );
}

export default BookingForm;
