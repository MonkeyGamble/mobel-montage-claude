export function Testimonial({ data: testimonial }) {
  return (
    <section className="testimonial wrap">
      <div className="testimonial-mark">{testimonial.mark}</div>
      <p className="testimonial-quote">
        {testimonial.quoteA}
        <em>{testimonial.quoteEm}</em>
        {testimonial.quoteB}
      </p>
      <div className="testimonial-attr">
        <div className="avatar">M</div>
        <span className="name">{testimonial.name}</span>
        <span className="sep">/</span>
        <span>{testimonial.loc}</span>
        <span className="sep">/</span>
        <span>{testimonial.date}</span>
      </div>
    </section>
  );
}
