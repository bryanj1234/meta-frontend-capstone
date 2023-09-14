import './App.css';

import {useGC} from './GlobalContext';

import {Routes, Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';

import {Header} from './components/Header';
import {Main, Section, About} from './components/Main';
import {Footer} from './components/Footer';
import {Specials} from './components/Specials';
import {Testimonials} from './components/Testimonials';

function App() {
  const GC = useGC();

  const thehero =  <Section id="hero">
        <h1>Little Lemon</h1>
        <h2>Detroit</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <img src={GC.header_image} alt={"header_image"}/>
        <span id="btn-reserve">Reserve a table</span>
      </Section>

  const thespecials = <Section id="specials">
    <h1>Specials</h1>
    <span id="btn-order">Order online</span>
    <Specials specials={GC.specials}></Specials>
  </Section>

  const thetestimonials = <Section id="testimonials">
    <h1>Testimonials</h1>
    <Testimonials testimonials={GC.testimonials}></Testimonials>
  </Section>

  const theabout = <About></About>

  return (
    <>

      <BrowserRouter>

      <Header></Header>


      <Main>

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
            FIXME: RESERVATIONS
          </>
          }></Route>

          <Route path="/Order_online" element={
            <>
            FIXME: ORDER ONLINE
          </>
          }></Route>

          <Route path="/Login" element={
            <>
              FIXME: LOGIN
            </>
          }></Route>

        </Routes>

      </Main>

      <Footer></Footer>

      </BrowserRouter>
    </>
  );
}

export default App;

