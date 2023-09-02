const Navbar = () => {
  return (
    <nav>
      NAV
    </nav>
  )
}

export const Header = (props) => {
  return (
    <header>
      <img src={props.logo} alt={"logo"}/>
      <Navbar>
      </Navbar>
    </header>
  )
}
