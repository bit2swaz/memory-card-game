import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Header.module.css';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Memory Game</h1>
        <p className={styles.subtitle}>Don't click the same card twice!</p>
      </div>
      <div className={styles.themeToggleContainer}>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </header>
  );
};

export default Header;
