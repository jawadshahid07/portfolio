import React from 'react';
import background from '../assets/background.jpg';

function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold">Jawad Shahid</h1>
        <p className="text-2xl mt-4">Software Engineer</p>
      </div>
    </section>
  );
}

export default Hero;
