import { motion } from 'framer-motion';
import Card from '../Card/Card';
import styles from './CardGrid.module.css';

const CardGrid = ({ cards, onCardClick }) => {
  return (
    <motion.div 
      className={styles.cardGrid}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {cards.map((card) => (
        <motion.div 
          key={card.id} 
          className={styles.cardWrapper}
          layout
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 25
          }}
        >
          <Card card={card} onClick={onCardClick} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CardGrid;
