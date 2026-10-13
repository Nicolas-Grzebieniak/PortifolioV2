import { useState } from "react";
import Section, { Heading } from "./Section.jsx";
import { site } from "../data/site.js";

const { contact } = site;

export default function Contact() {
  const [status, setStatus] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Com chave do Web3Forms: envia direto para o seu e-mail, sem sair da página.
    if (contact.web3formsKey) {
      setStatus("Sending...");
      try {
        data.append("access_key", contact.web3formsKey);
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: data,
        });
        const json = await res.json();
        setStatus(
          json.success
            ? "Message sent. Thank you!"
            : "Something went wrong. Please try again.",
        );
        if (json.success) form.reset();
      } catch {
        setStatus("Something went wrong. Please try again.");
      }
      return;
    }

    // Sem chave: abre o app de e-mail do visitante com a mensagem pronta.
    const subject = encodeURIComponent(
      `Portfolio contact from ${data.get("name")}`,
    );
    const body = encodeURIComponent(
      `${data.get("message")}\n\n${data.get("name")}\n${data.get("email")}`,
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setStatus("Opening your email app...");
  }

  return (
    <Section id="contact" className="contact">
      <Heading id="contact" title={contact.title} />
      <p className="intro">{contact.intro}</p>
      <p className="actions">
        {contact.links.map((l) => (
          <a
            className="btn"
            href={l.href}
            key={l.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            {l.label}
          </a>
        ))}
      </p>
      <form className="cf" onSubmit={onSubmit}>
        <div className="cf-row">
          <label>
            Name
            <input name="name" type="text" required autoComplete="name" />
          </label>
          <label>
            Email
            <input name="email" type="email" required autoComplete="email" />
          </label>
        </div>
        <label>
          Message
          <textarea name="message" rows="5" required />
        </label>
        <input type="checkbox" name="botcheck" hidden tabIndex={-1} />
        <div className="cf-end">
          <button className="btn primary" type="submit">
            Send
          </button>
          <p className="cf-note" role="status" aria-live="polite">
            {status}
          </p>
        </div>
      </form>
    </Section>
  );
}
