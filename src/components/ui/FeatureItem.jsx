import React from 'react';
import styles from './FeatureItem.module.css';
import { IconContext } from 'react-icons';

const FeatureItem = ({ icon, title, description }) => (
  <div className={styles.featureItem}>
    <IconContext.Provider value={{ size: '2.5em', color: '#D35400' }}>
      <div className={styles.icon}>{icon}</div>
    </IconContext.Provider>
    <div>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>
    </div>
  </div>
);

export default FeatureItem;
