import { FormField } from './FormField.jsx';
import { CONTACT_CARD_LINKS } from '../config/contact.js';
import { SectionRef } from './SectionRef.jsx';
import { useState } from 'react';
import { UploadIcon, ArrowRightIcon } from './Icons.jsx';

export function Contact({ data: contact }) {
  const [submitted, setSubmitted] = useState(false);
  // Preserve the original local-only feedback; no backend exists in this project.
  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }
  return (
    <section className="section kontakt wrap" id="kontakt">
      <SectionRef data={contact.ref} />
      <div className="kontakt-head">
        <h2>
          {contact.headA}
          <br />
          <em>{contact.headEm}</em>
          {contact.headB}
        </h2>
        <p className="sub">{contact.sub}</p>
      </div>
      <form className="form-grid" id="contact-form" noValidate onSubmit={handleSubmit}>
        <FormField id="contact-name" label={contact.f1Label} required>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder={contact.f1Ph}
            required
          />
        </FormField>
        <FormField id="contact-phone" label={contact.f2Label} required>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder={contact.f2Ph}
            required
          />
        </FormField>
        <FormField id="contact-description" label={contact.f3Label} required wide>
          <textarea
            id="contact-description"
            name="description"
            rows="2"
            placeholder={contact.f3Ph}
            required
          />
        </FormField>
        <FormField id="contact-location" label={contact.f4Label}>
          <input id="contact-location" name="location" type="text" placeholder={contact.f4Ph} />
        </FormField>
        <label className="field upload">
          <div>
            <div className="upload-label">{contact.f5Label}</div>
            <span className="hint">{contact.f5Hint}</span>
          </div>
          <UploadIcon size={18} />
          <input name="attachment" type="file" hidden accept="image/*,application/pdf" />
        </label>
        <div className="submit-wrap">
          <button type="submit" className="submit">
            <span className="submit-text" aria-live="polite">
              {submitted ? contact.submitted : contact.submit}
            </span>
            <span className="arrow">
              <ArrowRightIcon size={18} />
            </span>
          </button>
        </div>
      </form>
      <div className="contact-direct">
        {CONTACT_CARD_LINKS.map((href, i) => (
          <a href={href} className="contact-card" key={href}>
            <span className="label">{contact.cards[i].label}</span>
            <span
              className="value"
              style={i === 2 ? { fontSize: 'clamp(16px,1.8vw,22px)' } : undefined}
            >
              {contact.cards[i].value}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
