import {GlobalContext} from '../GlobalContext';
import {useContext} from 'react';

const Navbar = () => {
  return (
    <nav>
      NAV
    </nav>
  )
}

export const Header = () => {
  const GC = useContext(GlobalContext);

  return (
    <header>
      <img src={GC.logo} alt={"logo"}/>
      <Navbar>
      </Navbar>
    </header>
  )
}
