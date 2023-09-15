import { useState, useEffect } from "react";

export const BookingForm = () => {

  const [visitDate, setVisitDate] = useState("");
  const [visitTime, setVisitTime] = useState("");
  const [visitNumber, setVisitNumber] = useState(1);
  const [occasion, setOccasion] = useState("No special occasion");

  function visitDateChange(e) {
    setVisitDate(e.target.value);
  }

  function visitTimeChange(e) {
    setVisitTime(e.target.value);
  }

  function visitNumberChange(e) {
    setVisitNumber(e.target.value);
  }

  function occasionChange(e) {
    setOccasion(e.target.value);
  }


  function getIsFormValid() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted!");

    console.log(visitDate);
    console.log(visitTime);
    console.log(visitNumber);
    console.log(occasion);
  };

  return (
    <>

      <form id="booking-form" onSubmit={handleSubmit}>

        <span>
        <label htmlFor="res-date">Choose date</label>
        <input className={visitDate != "" ? "Field" : "InvalidField"} type="date" id="res-date"
          value={visitDate} onChange={visitDateChange}
        />
        <sup className={visitDate != "" ? "" : "fixit"}>*</sup>
        </span>

        <span>
        <label htmlFor="res-time">Choose time</label>
        <select className={visitTime != "" ? "Field" : "InvalidField"} id="res-time"
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
        <sup className={visitTime != "" ? "" : "fixit"}>*</sup>
        </span>

        <span>
        <label htmlFor="guests">Number of guests</label>
        <input className="Field" type="number" placeholder="1" min="1" max="10" id="guests"
          value={visitNumber} onChange={visitNumberChange}
        />
        </span>

        <span>
        <label htmlFor="occasion">Occasion</label>
        <select className="Field" id="occasion"
          value={occasion} onChange={occasionChange}>
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


