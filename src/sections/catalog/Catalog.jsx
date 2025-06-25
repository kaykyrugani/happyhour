import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../components/UI/SectionTitle';
import CardItem from '../../components/UI/CardItem';
import styles from './Catalog.module.css';
import menuData from '../../data/menu.json';

const Catalog = () => (
  <section className={styles.catalog} id="catalog">
    <SectionTitle title="Cardápio" subtitle="Conheça nossas opções" align="center" />
    {menuData.map((cat, idx) => (
      <motion.div
        key={cat.category}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: idx * 0.18 }}
        className={styles.categorySection}
      >
        <h3 className={styles.category}>{cat.category}</h3>
        <div className={styles.grid}>
          {cat.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.11 }}
              className={styles.cardMotion}
            >
              <CardItem image={item.image} title={item.name} price={item.price} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    ))}
  </section>
);

export default Catalog;
