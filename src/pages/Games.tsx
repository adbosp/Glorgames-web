import React, { useState } from 'react';
import { GameCard } from '../components/GameCard';
import { Game } from '../types';

const GAMES: Game[] = [
  {
    id: '1',
    title: 'Cosmic Conquest',
    description: 'An epic space adventure where you build and manage your own galactic empire.',
    imageUrl: 'https://cdn.impossibleimages.ai/wp-content/uploads/2024/11/05123458/BafKbwMBsst6vDt1sYn0CMRvzF9BOrC4OECuhWj579ad2VQY4t-1500x2120.jpg',
    category: 'strategy',
    rating: 4.8,
    releaseDate: '2024-03-15'
  },
  {
    id: '2',
    title: 'Neon Nights',
    description: 'Race through a cyberpunk city in this high-stakes action game.',
    imageUrl: 'https://img.freepik.com/free-psd/3d-rendering-groundhog-day-icon_23-2151920509.jpg?t=st=1741431688~exp=1741435288~hmac=92af4064d79d71c7ea019b763dffb29825ad8bbb8c77e652fbdb1597a7cce4b9&w=740',
    category: 'action',
    rating: 4.6,
    releaseDate: '2024-02-01'
  },
  {
    id: '3',
    title: 'Mind Maze',
    description: 'Challenge your brain with intricate puzzles in a mysterious ancient temple.',
    imageUrl: 'https://img.freepik.com/free-psd/three-dimensional-illustration-amusement-park-scene-with-floating-landscape_23-2150212411.jpg?t=st=1741431731~exp=1741435331~hmac=6f83c448a7d32e905746aca4ca0ada5c16fc61089acc09c2f681ac339cbd2875&w=900',
    category: 'puzzle',
    rating: 4.7,
    releaseDate: '2024-01-20'
  }
];

export function Games() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredGames = selectedCategory === 'all'
    ? GAMES
    : GAMES.filter(game => game.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white text-black pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-5xl font-bold mb-12 text-center">Our Games</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              selectedCategory === 'all'
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          {['action', 'strategy', 'puzzle', 'adventure'].map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium capitalize transition-colors duration-300 ${
                selectedCategory === category
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
}