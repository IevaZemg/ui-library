import React from 'react';
import styles from './Radio.module.css';

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Radio: React.FC<RadioProps> = ({ label, ...rest }) => (
  <label className={styles.radioLabel}>
    <input type="radio" className={styles.radio} {...rest} />
    <span className={styles.custom}></span>
    {label}
  </label>
);