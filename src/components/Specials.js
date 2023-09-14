const SpecialCard = (special) => {

  return (
    <div className="scard" skey={special.specialKey}>{special.dish}</div>
  )
}


export const Specials = (props) => {

  const specials = props.specials;
  const special_items = specials.map(
    (special) => <SpecialCard
                    key={special.key}
                    skey={special.key}
                    dish={special.dish}>
                  </SpecialCard>
  );

  return (
    <div id="specials-gallery">
        {special_items}
    </div>
  )
}

