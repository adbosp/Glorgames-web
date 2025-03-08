import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-70"
          >
            <source src="https://storage.googleapis.com/pgoblog/gotour-2025/videos/PGO_Tour25_16x9_6_EN.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white/50" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          SundayBaby AI
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-700">
            Experience the next generation of gaming with breakthrough performance and innovative design.
          </p>
          <Link
            to="/games"
            className="group inline-flex items-center px-8 py-4 text-lg rounded-full bg-black text-white hover:bg-gray-800 transition-all duration-300"
          >
            Play Now
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Featured Section */}
      <div className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Latest Releases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Cosmic Conquest",
                subtitle: "Strategic Space Adventure",
                image: "https://cdn.impossibleimages.ai/wp-content/uploads/2024/11/05123458/BafKbwMBsst6vDt1sYn0CMRvzF9BOrC4OECuhWj579ad2VQY4t-1500x2120.jpg"
              },
              {
                title: "Neon Nights",
                subtitle: "High-Stakes Racing",
                image: "https://img.freepik.com/free-psd/3d-rendering-groundhog-day-icon_23-2151920509.jpg?t=st=1741431688~exp=1741435288~hmac=92af4064d79d71c7ea019b763dffb29825ad8bbb8c77e652fbdb1597a7cce4b9&w=740"
              },
              {
                title: "Mind Maze",
                subtitle: "Puzzle Masterpiece",
                image: "https://img.freepik.com/free-psd/three-dimensional-illustration-amusement-park-scene-with-floating-landscape_23-2150212411.jpg?t=st=1741431731~exp=1741435331~hmac=6f83c448a7d32e905746aca4ca0ada5c16fc61089acc09c2f681ac339cbd2875&w=900"
              }
            ].map((game, index) => (
              <div key={index} className="card-hover">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-[400px] object-cover rounded-2xl mb-6 shadow-lg"
                />
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">{game.title}</h3>
                <p className="text-gray-600">{game.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}