import {useGC} from '../GlobalContext';

const Navbar = (props) => {

  const links = props.links;
  const link_items = links.map(
    (link) => <li class="nav-item" key={link.key}><a href={link.url}>{link.title}</a></li>
  );

  return (
    <nav>
      <ul>
          {link_items}
      </ul>
    </nav>
  )
}

export const Header = () => {
  const GC = useGC();
  return (
    <header>
      <img src={GC.logo} alt={"logo"}/>
      <Navbar links={GC.nav_links}></Navbar>
    </header>
  )
}
