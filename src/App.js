import './App.css';
import {Header, Navbar} from './components/Header';
import {Main, Section} from './components/Main';
import {Footer} from './components/Footer';

function App() {
  return (
    <>

      <Header>
        <Navbar></Navbar>
      </Header>

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

