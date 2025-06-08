import Card from '../Card/Card';
import styles from './CardGrid.module.css';

const CardGrid = ({ cards, onCardClick }) => {
  return (
    <div className={styles.cardGrid}>
      {cards.map((card) => (
        <div key={card.id} className={styles.cardWrapper}>
          <Card card={card} onClick={onCardClick} />
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
