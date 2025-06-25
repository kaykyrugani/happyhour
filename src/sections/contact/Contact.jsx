import React from 'react';
import SectionTitle from '../../components/UI/SectionTitle';
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = () => (
  <section className={styles.contact} id="contact">
    <SectionTitle title="Contato" subtitle="Fale conosco" align="center" />
    <div className={styles.grid}>
      <div className={styles.info}>
        <h4>Informações</h4>
        <ul>
          <li><FaWhatsapp /> <a href="https://wa.me/5599999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">(99) 99999-9999</a></li>
          <li><FaInstagram /> <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">@happyhourcampestre</a></li>
          <li><FaMapMarkerAlt /> Rua das Esfirras, 123 - Centro</li>
        </ul>
      </div>
      <div className={styles.mapWrapper}>
        <iframe
          title="Mapa Happy Hour Campestre"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.430403642808!2d-46.65657368502237!3d-23.58806848466906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8e4f9e3e1%3A0x2a6e7a2c1e2c8e6e!2sRua%20das%20Esfirras%2C%20123%20-%20Centro!5e0!3m2!1spt-BR!2sbr!4v1688320000000!5m2!1spt-BR!2sbr"
          width="100%"
          height="250"
          style={{ border: 0, borderRadius: '1rem', width: '100%' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
);

export default Contact;
