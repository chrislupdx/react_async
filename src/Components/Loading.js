import React from 'react';
import styles from './Loader.css';
import spinner from '../assets/spinner.jpg';

export default function Loading() {
  return <img className={styles.loader} src={spinner} />;
}
