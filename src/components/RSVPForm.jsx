import { useState } from "react";
import "./RSVPForm.css"; // Ensure this file exists with styles

export default function RSVPForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [side, setSide] = useState("Groom");// Added side state to track Groom/Bride
  const [guests, setGuests] = useState("0");
  const [wishes, setWishes] = useState("");
 

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send data to Google Apps Script
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzR9dLA_Ptfj7vUbjdnAV6qEuAeUyPrT9nMi1mD-mmmdgYqJlDqlpiQIwOQ0yBhU31_sw/exec",
        {
          method: "POST",
          body: JSON.stringify({
            name,
            phone,
            side, // Send the side (Groom or Bride)
            guests,
            wishes,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error sending data", error);
    }

    // Reset form after submission
    setName("");
    setPhone("");
    setSide("Groom"); // Reset the side to Groom after submission
    setGuests("0");
    setWishes("");
   
  };

  return (
    <div className="form-container" id="rsvp-form">
      <form onSubmit={handleSubmit} className="rsvp-form">
        <h2>आपण आमंत्रित आहात!</h2>
        <p>We'd love to have you with us on our big day 💛</p>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Your Name"
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          placeholder="Your WhatsApp Number"
          type="tel"
        />

        <select
          value={side}
          onChange={(e) => setSide(e.target.value)} // Set the side value (Groom/Bride)
        >
          <option value="Groom">वर पक्ष</option>
          <option value="Bride">वधू पक्ष</option>
        </select>

        <input
          value={guests}
          onChange={(e) => {
            const val = Math.max(0, Number(e.target.value));
            setGuests(val);
          }}
          type="text"
          placeholder="Number of Guests"
          min="1"
        />

        <textarea
          value={wishes}
          onChange={(e) => setWishes(e.target.value)}
          placeholder="Any wishes or message?"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
