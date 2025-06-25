import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Button from '../../components/ui/Button';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.overlay}></div>
      <div className="hero-gradient"></div>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.subtitle}>Viva momentos inesquecíveis</span>
          <h1 className={styles.title}>O sabor que conquista e o ambiente que acolhe</h1>
          <p className={styles.description}>
            Gastronomia casual, drinks autorais e o clima perfeito para celebrar a vida. <br />
            Venha viver essa experiência no coração da natureza!
          </p>
          <div className={styles.buttons}>
            <Link to="cardapio" smooth={true} duration={500} offset={-80}>
              <Button variant="primary" size="large">
                Descubra nosso sabor
              </Button>
            </Link>
            <Link to="contato" smooth={true} duration={500} offset={-80}>
              <Button variant="outline" size="large">
                Quero reservar agora
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;