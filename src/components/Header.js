export const Navbar = () => {
  return (
    <nav>
      NAV
    </nav>
  )
}

export const Header = (props) => {
  return (
    <header>
      HEADER
      {props.children}
    </header>
  )
}
