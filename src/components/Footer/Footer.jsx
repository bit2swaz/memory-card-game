import { motion } from 'framer-motion';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        Made with <span className={styles.heart}>❤</span> by{' '}
        <motion.a 
          href="https://github.com/bit2swaz" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.link}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          bit2swaz
        </motion.a>
      </p>
    </footer>
  );
};

export default Footer; 