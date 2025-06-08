import styles from './Card.module.css';

const Card = ({ card, onClick }) => {
  return (
    <div className={styles.card} onClick={() => onClick(card.id)}>
      <div className={styles.imageContainer}>
        <img src={card.image} alt={card.name} className={styles.cardImage} />
      </div>
      <div className={styles.cardInfo}>
        <h3 className={styles.cardTitle}>{card.name}</h3>
      </div>
    </div>
  );
};

export default Card;
