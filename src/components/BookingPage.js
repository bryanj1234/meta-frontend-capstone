import { useState, useEffect } from "react";

export const BookingForm = () => {

  const [visitDate, setVisitDate] = useState("");
  const [visitTime, setVisitTime] = useState("");
  const [visitNumber, setVisitNumber] = useState(1);

  function visitDateChange(e) {
    setVisitDate(e.target.value);
  }

  function visitTimeChange(e) {
    setVisitTime(e.target.value);
  }

  function visitNumberChange(e) {
    setVisitNumber(e.target.value);
  }

  function getIsFormValid() {

    console.log(visitDate != "");
    console.log(visitTime != "");
    console.log(visitNumber != "");

    return visitDate;
  }

  const clearForm = () => {
    setVisitDate("");
    setVisitTime("");
    //setVisitNumber("");
  };

  useEffect(() => {
    clearForm();
    getIsFormValid();
  }, []);

  return (
    <>

      <form id="booking-form">

        <span>
        <sup>*</sup>
        <label htmlFor="res-date">Choose date</label>
        <input className="Field" type="date" id="res-date"
          value={visitDate} onChange={visitDateChange}
        />
        </span>

        <span>
        <sup>*</sup>
        <label htmlFor="res-time">Choose time</label>
        <select className="Field" id="res-time"
          value={visitTime} onChange={visitTimeChange}
        >
            <option></option>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
        </select>
        </span>

        <span>
        <sup>*</sup>
        <label htmlFor="guests">Number of guests</label>
        <input className="Field" type="number" placeholder="1" min="1" max="10" id="guests"
          value={visitNumber} onChange={visitNumberChange}
        />
        </span>

        <span>
        <sup>*</sup>
        <label htmlFor="occasion">Occasion</label>
        <select className="Field" id="occasion">
            <option>No special occasion</option>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        </span>

        <input className="Field" id="submit" type="submit" value="Reserve Now"
          disabled={!getIsFormValid()}
        />

      </form>
    </>
  )
}

export const BookingPage = () => {

  return (
    <div id = "reserve">

      <h1>Plan your dining experience</h1>

      <BookingForm></BookingForm>

    </div>
  )
}

