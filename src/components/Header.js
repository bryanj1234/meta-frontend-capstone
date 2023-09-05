import {useGC} from '../GlobalContext';

const Navbar = () => {
  return (
    <nav>
      NAV
    </nav>
  )
}

export const Header = () => {
  const GC = useGC();
  return (
    <header>
      <img src={GC.logo} alt={"logo"}/>
      <Navbar>
      </Navbar>
    </header>
  )
}
