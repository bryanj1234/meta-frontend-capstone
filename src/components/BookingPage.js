import { useState, useEffect } from "react";

export const BookingForm = (props) => {

  const initVisitDate = "";
  const initVisitTime = "";
  const initOccasion = "No special occasion";

  const [visitDate, setVisitDate] = useState(initVisitDate);
  const [visitTime, setVisitTime] = useState(initVisitTime);
  const [visitNumber, setVisitNumber] = useState(1);
  const [occasion, setOccasion] = useState(initOccasion);

  function visitDateChange(e) {
    setVisitDate(e.target.value);
  }

  function visitTimeChange(e) {
    setVisitTime(e.target.value);
  }

  function visitNumberChange(e) {
    let visitNumber = parseInt(e.target.value);
    visitNumber = isNaN(visitNumber) ? 0 : visitNumber;
    setVisitNumber(visitNumber);
    getIsFormValid();
  }

  function occasionChange(e) {
    setOccasion(e.target.value);
  }

  function getIsFormValid() {
    return (
      visitDate != initVisitDate
            && visitTime != initVisitDate
            && (visitNumber > 0  && visitNumber < 11)
    );
  }

  useEffect(() => {
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
          value={visitDate}
          onChange={visitDateChange}
        />
        <sup className={visitDate != "" ? "" : "fixit"}>*</sup>
        </span>

        <span>
        <label htmlFor="res-time">Choose time</label>
        <select className={visitTime != "" ? "Field" : "InvalidField"} id="res-time"
          value={visitTime}
          onChange={visitTimeChange}
        >
            {props.availableTimes.map(
              (a_time) => <option key={a_time}>{a_time}</option>
            )}
        </select>
        <sup className={visitTime != "" ? "" : "fixit"}>*</sup>
        </span>

        <span>
        <label htmlFor="guests">Number of guests</label>
        <input className={(visitNumber > 0  && visitNumber < 11) ? "Field" : "InvalidField"}
          type="number" placeholder="10" min="1" max="10" id="guests"
          value={visitNumber}
          onChange={visitNumberChange}
        />
        <sup className={(visitNumber > 0  && visitNumber < 11) ? "" : "fixit"}>*</sup>
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

export const BookingPage = (props) => {

  return (
    <div id = "reserve">

      <h1>Plan your dining experience</h1>

      <BookingForm availableTimes={props.availableTimes}></BookingForm>

    </div>
  )
}


