import {useGC} from '../GlobalContext';

export const Footer = () => {
  const GC = useGC();

  const doormat = GC.doormat;
  const doormat_items = doormat.map(
    (link) => <li className="nav-item" key={link.key}><a href={link.url}>{link.title}</a></li>
  );

  const contact = GC.contact;
  const contact_items = contact.map(
    (link) => <li className="nav-item" key={link.key}><a href={link.url}>{link.title}</a></li>
  );

  const social = GC.social;
  const social_items = social.map(
    (link) => <li className="nav-item" key={link.key}><a href={link.url}>{link.title}</a></li>
  );

  return (
    <footer>

      <img src={GC.lemon} alt={"lemon"}/>

      <div id="doormat">
        <span className="fl-header">Friends & Partners</span>
        <ul>
            {doormat_items}
        </ul>
      </div>

      <div id="contact">
      <span className="fl-header">Contact Us</span>
        <ul>
            {contact_items}
        </ul>
      </div>

      <div id="social">
      <span className="fl-header">Social Media</span>
        <ul>
            {social_items}
        </ul>
      </div>

    </footer>
  )
}
