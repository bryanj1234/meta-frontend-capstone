const SpecialCard = (special) => {

  return (
    <div className="scard" skey={special.specialKey}>
      <img className="simg" src={special.img}></img>
      <div className="sdish">{special.dish}</div>
      <div className="sprice">{special.price}</div>
      <div className="sdesc">{special.desc}</div>
    </div>
  )
}


export const Specials = (props) => {

  const specials = props.specials;
  const special_items = specials.map(
    (special) => <SpecialCard
                    key={special.key}
                    skey={special.key}
                    dish={special.dish}
                    price={special.price}
                    img={special.img}
                    desc={special.desc}>
                  </SpecialCard>
  );

  return (
    <div id="specials-gallery">
        {special_items}
    </div>
  )
}

