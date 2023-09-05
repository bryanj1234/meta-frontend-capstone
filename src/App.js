import './App.css';
import {Header} from './components/Header';
import {Main, Section} from './components/Main';
import {Footer} from './components/Footer';


// BRYAN FIXME: USE CONTEXT API FOR LOGO.
// SEE: https://react.dev/learn/passing-data-deeply-with-context



function App() {
  return (
    <>
      <Header></Header>

      <Main>
        <Section>HERO</Section>
        <Section>SPECIALS</Section>
        <Section>TESTIMONIALS</Section>
        <Section>ABOUT</Section>
      </Main>

      <Footer></Footer>
    </>


  );
}

export default App;

