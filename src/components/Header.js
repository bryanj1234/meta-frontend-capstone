import {useGC} from '../GlobalContext';

import {Link} from "react-router-dom";

const Navbar = (props) => {

  const links = props.links;
  const link_items = links.map(

    (link) => <li className="nav-item" key={link.key}><Link to={link.url}>{link.title}</Link></li>

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
