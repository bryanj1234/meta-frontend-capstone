export const BookingForm = () => {

  return (
    <>

      <form id="booking-form">

        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" />

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time ">
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
        </select>

        <label htmlFor="guests">Number of guests</label>

        <input type="number" placeholder="1" min="1" max="10" id="guests" />

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion">
            <option>No special occasion</option>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>

        <input id="submit" type="submit" value="Reserve Now" />

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

