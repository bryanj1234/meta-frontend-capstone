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
