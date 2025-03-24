import React, { useState } from "react";

function BookingForm() {
  // State variables for form fields
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  // Available times state
  const [availableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details:", { date, time, guests, occasion });
    alert("Reservation submitted! (This is a placeholder for now)");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
      <label htmlFor="res-date">Choose date</label>
      <input 
        type="date" 
        id="res-date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
        required 
      />

      <label htmlFor="res-time">Choose time</label>
      <select 
        id="res-time" 
        value={time} 
        onChange={(e) => setTime(e.target.value)} 
        required
      >
        <option value="" disabled>Select a time</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input 
        type="number" 
        id="guests" 
        min="1" 
        max="10" 
        value={guests} 
        onChange={(e) => setGuests(e.target.value)} 
        required 
      />

      <label htmlFor="occasion">Occasion</label>
      <select 
        id="occasion" 
        value={occasion} 
        onChange={(e) => setOccasion(e.target.value)} 
        required
      >
        <option value="" disabled>Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your Reservation" />
    </form>
  );
}

export default BookingForm;
