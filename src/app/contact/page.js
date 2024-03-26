import React from "react";
import ContactCard from "@/app/components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "@/app/components/ContactForm";

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h2>Contact Us</h2>
        <ContactCard />

        <section className={styles.contact_section}>
          <h2>
            We'd love to hear <span> from you </span>
          </h2>

          <ContactForm />
        </section>
      </div>

      <iframe
        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Dehradun, Cynoteck&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        width={100}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        className={styles.mapping}
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Contact;
