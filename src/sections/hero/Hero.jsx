import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Button from '../../components/ui/Button';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.subtitle}>Bem-vindo ao</span>
          <h1 className={styles.title}>Happy Hour Campestre</h1>
          <p className={styles.description}>
            O melhor lugar para desfrutar de momentos incríveis com boa comida,
            drinks especiais e um ambiente acolhedor no coração da natureza.
          </p>
          <div className={styles.buttons}>
            <Link to="cardapio" smooth={true} duration={500} offset={-80}>
              <Button variant="primary" size="large">
                Ver Cardápio
              </Button>
            </Link>
            <Link to="contato" smooth={true} duration={500} offset={-80}>
              <Button variant="outline" size="large">
                Reservar Mesa
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;