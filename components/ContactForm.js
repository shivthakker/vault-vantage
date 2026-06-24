"use client";

import { useState } from "react";

const INTERESTS = [
  "UK to Singapore Import",
  "Vehicle Sourcing (UK)",
  "Future Services (Storage / Events / Experiences)",
  "General Enquiry",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="form-success">
        <p className="section-label" style={{ marginBottom: "0.75rem" }}>
          Enquiry Received
        </p>
        <p className="lead">
          Thank you. We will be in touch shortly — all enquiries are handled with
          complete confidentiality.
        </p>
      </div>
    );
  }

  return (
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="field">
        <label className="section-label" htmlFor="name">
          Name
        </label>
        <input id="name" name="name" type="text" required placeholder="Your name" />
      </div>

      <div className="field">
        <label className="section-label" htmlFor="email">
          Email
        </label>
        <input id="email" name="email" type="email" required placeholder="your@email.com" />
      </div>

      <div className="field">
        <label className="section-label" htmlFor="interest">
          I am interested in
        </label>
        <select id="interest" name="interest" defaultValue={INTERESTS[0]}>
          {INTERESTS.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label className="section-label" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about the vehicle you are seeking, your budget, and your timeline."
        />
      </div>

      <button type="submit" className="btn-gold w-full">
        Send Enquiry
      </button>
      <p className="form-note">All enquiries are handled with complete confidentiality.</p>
    </form>
  );
}
