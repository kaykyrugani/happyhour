import React from 'react';
import SectionTitle from '../../components/ui/SectionTitle';
import FeatureItem from '../../components/ui/FeatureItem';
import { FaBeer, FaLeaf, FaMusic } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from './Features.module.css';

const features = [
  {
    icon: <FaBeer />,
    title: 'Drinks Especiais',
    description: 'Variedade de cervejas artesanais e coquetéis exclusivos.'
  },
  {
    icon: <FaLeaf />,
    title: 'Ambiente Campestre',
    description: 'Natureza, ar puro e clima rústico gourmet.'
  },
  {
    icon: <FaMusic />,
    title: 'Música ao Vivo',
    description: 'Shows e apresentações para animar o seu happy hour.'
  }
];

const Features = () => (
  <section className={styles.features} id="features">
    <SectionTitle title="Destaques do Ambiente" subtitle="O que oferecemos" align="center" />
    <div className={styles.grid}>
      {features.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: idx * 0.18 }}
          className={styles.glass}
        >
          <FeatureItem {...item} />
        </motion.div>
      ))}
    </div>
  </section>
);

export default Features;
