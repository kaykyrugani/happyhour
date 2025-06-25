import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${className}`.trim();
  
  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
