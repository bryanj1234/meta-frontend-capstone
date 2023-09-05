import {useGC} from '../GlobalContext';

export const Footer = () => {
  const GC = useGC();

  return (
    <footer>
      <img src={GC.logo} alt={"logo"}/>
    </footer>
  )
}
