# Memory Card Game

A React-based memory card game where you need to click on each card exactly once. If you click on the same card twice, your score resets to zero.

## Live Demo

🎮 [Play the Memory Card Game](https://bit2-memory.netlify.app/)

## Features

- Dynamic card fetching from the Pokémon API
- Score tracking (current score and best score)
- Light/dark theme toggle with localStorage persistence
- Responsive design for all screen sizes
- Clean, modern UI with smooth animations
- Interactive card hover and click effects
- Game over and win condition modals
- First-time user guide

## Tech Stack

- React (Vite)
- CSS Modules
- React Icons
- Framer Motion for animations

## How to Play

1. Click on any card to start the game
2. Try to click on each card only once
3. After each click, the cards will shuffle
4. If you click on a card you've already clicked, your score resets to 0
5. Try to achieve the highest score possible!

## Installation and Setup

```bash
# Clone the repository
git clone https://github.com/bit2swaz/memory-card-game.git

# Navigate to the project directory
cd memory-card-game

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Development

This project was built using React with functional components and hooks. The state management is handled using React's built-in useState and useEffect hooks. Animations are implemented with Framer Motion for smooth transitions and interactive elements.

## Deployment

The game is deployed using Netlify. Any push to the main branch will trigger an automatic deployment.

## Credits

- Card images from the [Pokémon API](https://pokeapi.co/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
