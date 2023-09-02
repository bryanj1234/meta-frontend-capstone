import './App.css';
import {Header} from './components/Header';
import {Main, Section} from './components/Main';
import {Footer} from './components/Footer';
import logo from './assets/logo.svg';

function App() {
  return (
    <>

      <Header
        logo={logo}
      >
      </Header>

      <Main>
        <Section>HERO</Section>
        <Section>SPECIALS</Section>
        <Section>TESTIMONIALS</Section>
        <Section>ABOUT</Section>
      </Main>

      <Footer
        logo={logo}
      >
      </Footer>

    </>
  );
}

export default App;

