import { motion } from 'framer-motion';
import styles from './Card.module.css';

const Card = ({ card, onClick }) => {
  return (
    <motion.div 
      className={styles.card} 
      onClick={() => onClick(card.id)}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      layout
    >
      <div className={styles.imageContainer}>
        <img src={card.image} alt={card.name} className={styles.cardImage} />
      </div>
      <div className={styles.cardInfo}>
        <h3 className={styles.cardTitle}>{card.name}</h3>
      </div>
    </motion.div>
  );
};

export default Card;
