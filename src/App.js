import './App.css';

import {useGC} from './GlobalContext';

import {Header} from './components/Header';
import {Main, Section} from './components/Main';
import {Footer} from './components/Footer';

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
          <h1>This week's specials!</h1>
        </Section>

        <Section id="testimonials">
          <h1>Testimonials</h1>
        </Section>

        <Section id="about">
          <h1>About Us</h1>
        </Section>
      </Main>

      <Footer></Footer>
    </>


  );
}

export default App;

