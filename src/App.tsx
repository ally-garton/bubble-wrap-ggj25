import './App.css'
import { useState } from 'react';

import Particles from "./components/Particles";
import Bubble from './components/Bubble';

function App() {
  const [bubbles, setBubbles] = useState<number[]>(Array(50).fill(0));

  const handleBubbleClick = () => {
    const bubblesToAdd = Math.floor(Math.random() * 11);

    for (let x = 0; x < bubblesToAdd; x++) {
      setBubbles((prevBubbles) => [...prevBubbles, 0]);      
    }
};

  return (
    <div className="main">
      <Particles />
      {bubbles.map((_, index) => (
          <Bubble key={index} onBubbleClick={handleBubbleClick} />
      ))}
    </div>
  )
}

export default App
