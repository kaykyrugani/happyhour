import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../components/ui/SectionTitle';
import CardItem from '../../components/UI/CardItem';
import styles from './Gallery.module.css';

const galleryData = [
  { image: '/assets/images/prato1.jpg', title: 'Esfirra Gourmet', description: 'Massa leve e recheio especial.' },
  { image: '/assets/images/prato2.jpg', title: 'Parmegiana', description: 'O clássico do nosso cardápio.' },
  { image: '/assets/images/prato3.jpg', title: 'Drinks Artesanais', description: 'Refrescância e sabor únicos.' },
  // Adicione mais imagens conforme desejar
];

const Gallery = () => (
  <section className={styles.gallery} id="gallery">
    <SectionTitle title="Destaques do Cardápio" subtitle="Galeria de Pratos" align="center" />
    <div className={styles.grid}>
      {galleryData.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: idx * 0.15 }}
          className={styles.cardMotion}
        >
          <CardItem image={item.image} title={item.title}>
            <span className={styles.desc}>{item.description}</span>
          </CardItem>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Gallery;
