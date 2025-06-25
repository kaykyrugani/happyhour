import React from 'react';
import styles from './Footer.module.css';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.socials}>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
      <a href="https://wa.me/5599999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
      <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" aria-label="Localização"><FaMapMarkerAlt /></a>
    </div>
    <div className={styles.copyright}>
      &copy; {new Date().getFullYear()} Happy Hour Campestre. Todos os direitos reservados.
    </div>
  </footer>
);

export default Footer;
