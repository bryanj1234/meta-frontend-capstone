export const Section = (props) => {
  return (
    <section>{props.children}</section>
  )
}

export const Main = (props) => {
  return (
    <main>
      MAIN
      {props.children}
    </main>
  )
}
