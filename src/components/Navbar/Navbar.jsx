import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import styles from './Navbar.module.css';

const navLinks = [
  { to: 'inicio', label: 'Início' },
  { to: 'features', label: 'Destaques' },
  { to: 'gallery', label: 'Galeria' },
  { to: 'catalog', label: 'Cardápio' },
  { to: 'contact', label: 'Contato' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <ScrollLink to="inicio" smooth duration={500} offset={-80} className={styles.brand}>
            Happy Hour <span>Campestre</span>
          </ScrollLink>
        </div>
        <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
          {navLinks.map(link => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-80}
              activeClass={styles.active}
              spy
              className={styles.link}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </ScrollLink>
          ))}
        </nav>
        <button className={styles.menuBtn} onClick={() => setOpen(!open)} aria-label="Abrir menu">
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
