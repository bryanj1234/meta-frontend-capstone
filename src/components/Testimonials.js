export const Testimonials = (props) => {

  const testimonials = props.testimonials;
  const testimonial_items = testimonials.map(
            (testimonial) =>
            <div className="tcard"
                  key={testimonial.key}
                  skey={testimonial.key}>
              <div className="t-title">{testimonial.title}</div>
              <div className="t-review">{testimonial.review}</div>
          </div>
  );

  return (
    <div id="testimonials-gallery">
        {testimonial_items}
    </div>
  )
}

