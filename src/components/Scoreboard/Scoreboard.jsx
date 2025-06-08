import styles from './Scoreboard.module.css';

const Scoreboard = ({ currentScore, bestScore }) => {
  return (
    <div className={styles.scoreboard}>
      <div className={styles.scoreItem}>
        <span className={styles.scoreLabel}>Current Score:</span>
        <span className={styles.scoreValue}>{currentScore}</span>
      </div>
      <div className={styles.scoreItem}>
        <span className={styles.scoreLabel}>Best Score:</span>
        <span className={styles.scoreValue}>{bestScore}</span>
      </div>
    </div>
  );
};

export default Scoreboard;
