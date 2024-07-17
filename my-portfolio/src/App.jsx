import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="bg-custom-gradient min-h-screen">
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
