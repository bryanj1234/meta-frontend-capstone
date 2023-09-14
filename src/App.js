import './App.css';

import {useGC} from './GlobalContext';

import {Header} from './components/Header';
import {Main, Section} from './components/Main';
import {Footer} from './components/Footer';
import {Specials} from './components/Specials';
import {Testimonials} from './components/Testimonials';

function App() {
  const GC = useGC();
  return (
    <>
      <Header></Header>

      <Main>
        <Section id="hero">
          <h1>Little Lemon</h1>
          <h2>Detroit</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <img src={GC.header_image} alt={"header_image"}/>
          <span id="btn-reserve">Reserve a table</span>
        </Section>

        <Section id="specials">
          <h1>Specials</h1>
          <span id="btn-order">Order online</span>
          <Specials specials={GC.specials}></Specials>
        </Section>

        <Section id="testimonials">
          <h1>Testimonials</h1>
          <Testimonials testimonials={GC.testimonials}></Testimonials>
        </Section>

        <Section id="about">
          <span id="at-wrap">
            <span id="ab">About</span>
            <span id="ll">Little Lemon</span>
            <span id="det">Detroit</span>
          </span>
          <p id="ab-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.
          </p>
        </Section>
      </Main>

      <Footer></Footer>
    </>


  );
}

export default App;

