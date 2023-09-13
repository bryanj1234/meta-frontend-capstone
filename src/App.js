import './App.css';
import {Header} from './components/Header';
import {Main, Section} from './components/Main';
import {Footer} from './components/Footer';

function App() {
  return (
    <>
      <Header></Header>

      <Main>
        <Section id="hero">HERO</Section>
        <Section id="specials">SPECIALS</Section>
        <Section id="testimonials">TESTIMONIALS</Section>
        <Section id="about">about</Section>
      </Main>

      <Footer></Footer>
    </>


  );
}

export default App;

