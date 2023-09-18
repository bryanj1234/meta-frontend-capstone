import './App.css';

import {BrowserRouter} from 'react-router-dom';

import {Header} from './components/Header';
import {Main, Section, About} from './components/Main';
import {Footer} from './components/Footer';


function App() {

  return (
    <BrowserRouter>

      <Header></Header>

      <Main></Main>

      <Footer></Footer>

    </BrowserRouter>
  );
}

export default App;

