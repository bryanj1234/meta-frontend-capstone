import {useGC} from '../GlobalContext';

export const Footer = () => {
  const GC = useGC();

  const doormat = GC.doormat;
  const doormat_items = doormat.map(
    (link) => <li key={link.key}><a href={link.url}>{link.title}</a></li>
  );

  const contact = GC.contact;
  const contact_items = contact.map(
    (link) => <li key={link.key}><a href={link.url}>{link.title}</a></li>
  );

  const social = GC.social;
  const social_items = social.map(
    (link) => <li key={link.key}><a href={link.url}>{link.title}</a></li>
  );

  return (
    <footer>

      <img src={GC.logo} alt={"logo"}/>

      <div>
        Doormat nav
        <ul>
            {doormat_items}
        </ul>
      </div>

      <div>
        Contact
        <ul>
            {contact_items}
        </ul>
      </div>

      <div>
        Social
        <ul>
            {social_items}
        </ul>
      </div>

    </footer>
  )
}
