import React from 'react';
import styles from './SectionTitle.module.css';

const SectionTitle = ({ title, subtitle, align = 'center', className = '' }) => {
  return (
    <div className={`${styles.sectionTitle} ${styles[align]} ${className}`}>
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.underline}></div>
    </div>
  );
};

export default SectionTitle;
