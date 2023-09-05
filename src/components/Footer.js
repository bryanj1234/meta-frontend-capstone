import {GlobalContext} from '../GlobalContext';
import {useContext} from 'react';

export const Footer = () => {
  const GC = useContext(GlobalContext);

  return (
    <footer>
      <img src={GC.logo} alt={"logo"}/>
    </footer>
  )
}
