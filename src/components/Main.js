import {useGC} from '../GlobalContext';

import { useState } from "react";
import {Routes, Route} from 'react-router-dom';
import {Link} from "react-router-dom";
import {Specials} from './Specials';
import {Testimonials} from './Testimonials';
import {BookingPage} from './BookingPage';
import {Order} from './Order';

export const About = () => {
  const GC = useGC();

  return (
    <Section id="about">
    <span id="at-wrap">
      <span id="ab">About</span>
      <span id="ll">Little Lemon</span>
      <span id="det">Detroit</span>
    </span>
    <p id="ab-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.
    </p>

    <img id="ai1" src={GC.about_image_1}></img>
    <img id="ai2" src={GC.about_image_2}></img>

  </Section>
  )
}

export const Section = (props) => {
  return (
    <section id={props.id}>{props.children}</section>

  )
}

export const Main = () => {

  const GC = useGC();

  const [availableTimes, _] = useState(
    [
      "",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ]
  );

  const thehero =  <Section id="hero">
        <h1>Little Lemon</h1>
        <h2>Detroit</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <img src={GC.header_image} alt={"header_image"}/>
        <span id="btn-reserve"><Link to="/Reservations">Reserve a table</Link></span>
      </Section>

  const thespecials = <Section id="specials">
    <h1>Specials</h1>
    <span id="btn-order"><Link to="/Order_online">Order online</Link></span>
    <Specials specials={GC.specials}></Specials>
  </Section>

  const thetestimonials = <Section id="testimonials">
    <h1>Testimonials</h1>
    <Testimonials testimonials={GC.testimonials}></Testimonials>
  </Section>

  const theabout = <About></About>

  const thereservations = <BookingPage availableTimes={availableTimes}></BookingPage>

  const theorders = <Order></Order>

  return (
    <main>

      <Routes>

      <Route path="/" element={
        <>
          {thehero}
          {thespecials}
          {thetestimonials}
          {theabout}
        </>
      }></Route>

      <Route path="/About" element={
        <>
          {theabout}
        </>
      }></Route>

      <Route path="/Menu" element={
        <>
          {thespecials}
        </>
      }></Route>


      <Route path="/Reservations" element={
        <>
        {thereservations}
        </>
      }></Route>

      <Route path="/Order_online" element={
        <>
          {theorders}
        </>
      }></Route>

      <Route path="/Login" element={
        <>
          FIXME: LOGIN
        </>
      }></Route>

      </Routes>

    </main>
  )
}
