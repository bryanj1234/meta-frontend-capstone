import {useGC} from '../GlobalContext';

export const About = () => {
  const GC = useGC();

  return (
    <Section id="about">
    <span id="at-wrap">
      <span id="ab">About</span>
      <span id="ll">Little Lemon</span>
      <span id="det">Detroit</span>
    </span>
    <p id="ab-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.
    </p>

    <img id="ai1" src={GC.about_image_1}></img>
    <img id="ai2" src={GC.about_image_2}></img>

  </Section>
  )
}

export const Section = (props) => {
  return (
    <section id={props.id}>{props.children}</section>

  )
}

export const Main = (props) => {
  return (
    <main>
      {props.children}
    </main>
  )
}
