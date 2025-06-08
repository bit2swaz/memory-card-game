import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header/Header';
import CardGrid from './components/CardGrid/CardGrid';
import Scoreboard from './components/Scoreboard/Scoreboard';
import Modal from './components/Modal/Modal';
import Footer from './components/Footer/Footer';
import useTheme from './hooks/useTheme';
import './App.css';

function App() {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showGameOverModal, setShowGameOverModal] = useState(false);
  const [showWinModal, setShowWinModal] = useState(false);
  const [showHowToPlayModal, setShowHowToPlayModal] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Check if user has seen the how to play guide
  useEffect(() => {
    const hasSeenGuide = localStorage.getItem('hasSeenGuide');
    if (!hasSeenGuide) {
      setShowHowToPlayModal(true);
    }
  }, []);

  // Save that user has seen the guide
  const handleCloseHowToPlayModal = () => {
    localStorage.setItem('hasSeenGuide', 'true');
    setShowHowToPlayModal(false);
  };

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        // Fetch 12 random Pokémon
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12');
        const data = await response.json();
        
        // Fetch details for each Pokémon
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const detailResponse = await fetch(pokemon.url);
            const detail = await detailResponse.json();
            return {
              id: detail.id,
              name: detail.name.charAt(0).toUpperCase() + detail.name.slice(1),
              image: detail.sprites.other['official-artwork'].front_default || detail.sprites.front_default
            };
          })
        );
        
        setCards(pokemonDetails);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch Pokémon data. Please try again later.');
        setLoading(false);
        console.error('Error fetching Pokémon:', err);
      }
    };

    fetchPokemon();
  }, []);

  const shuffleCards = (cardsArray) => {
    // Create a copy of the cards array
    const newCards = [...cardsArray];
    
    // Fisher-Yates shuffle algorithm
    for (let i = newCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newCards[i], newCards[j]] = [newCards[j], newCards[i]];
    }
    
    return newCards;
  };

  const handleCardClick = (cardId) => {
    // Check if card has been clicked before
    if (clickedCards.includes(cardId)) {
      // Game over - show modal
      setShowGameOverModal(true);
      // Reset current score
      setCurrentScore(0);
      setClickedCards([]);
    } else {
      // Increment score
      const newScore = currentScore + 1;
      setCurrentScore(newScore);
      
      // Update best score if needed
      if (newScore > bestScore) {
        setBestScore(newScore);
      }
      
      // Add card to clicked cards
      const newClickedCards = [...clickedCards, cardId];
      setClickedCards(newClickedCards);
      
      // Check if player has won (clicked all cards)
      if (newClickedCards.length === cards.length) {
        setShowWinModal(true);
      }
    }
    
    // Shuffle cards after each click
    setCards(shuffleCards(cards));
  };

  const resetGame = () => {
    setCurrentScore(0);
    setClickedCards([]);
    setShowGameOverModal(false);
    setShowWinModal(false);
    setCards(shuffleCards(cards));
  };

  if (loading) {
    return (
      <div className="app" data-theme={theme}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <div className="loading">
          <p>Loading cards...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="app" data-theme={theme}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <div className="error">
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Try Again</button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="app" data-theme={theme}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="main">
        <Scoreboard currentScore={currentScore} bestScore={bestScore} />
        <CardGrid cards={cards} onCardClick={handleCardClick} />
      </main>
      <Footer />
      
      {/* Game Over Modal */}
      <Modal
        isOpen={showGameOverModal}
        onClose={resetGame}
        title="Game Over!"
      >
        <div className="modalText">
          <p>You clicked the same card twice!</p>
          <p>Score: {currentScore}</p>
          <p>Best Score: {bestScore}</p>
        </div>
      </Modal>
      
      {/* Win Modal */}
      <Modal
        isOpen={showWinModal}
        onClose={resetGame}
        title="Congratulations!"
      >
        <div className="modalText">
          <p>You've clicked all cards without repeating!</p>
          <p>Score: {currentScore}</p>
          <p>Best Score: {bestScore}</p>
        </div>
      </Modal>
      
      {/* How to Play Modal */}
      <Modal
        isOpen={showHowToPlayModal}
        onClose={handleCloseHowToPlayModal}
        title="How to Play"
      >
        <div className="modalText">
          <ol className="howToPlayList">
            <li>Click a card to begin.</li>
            <li>Cards shuffle after every click.</li>
            <li>Don't click the same card twice!</li>
            <li>Try to beat your highest score.</li>
          </ol>
        </div>
      </Modal>
    </div>
  );
}

export default App;
