import './App.css'
import { useState, useEffect } from 'react';

import Particles from "./components/Particles";
import Bubble from './components/Bubble';

function App() {
  const [bubbles, setBubbles] = useState<number[]>(Array(40).fill(0));
  const [bubbleCount, setBubbleCount] = useState(40);

  const handleRizzBubble = () => {
    let bubblesToAdd = Math.floor(Math.random() * 11);

    if (bubblesToAdd == 0) {
      bubblesToAdd = 1;
    }

    if (((bubbleCount - 1) + bubblesToAdd) > 40) {
      setBubbleCount(bubbleCount - 1);
      console.log("too many bubbles already!")

    } else {
      setBubbles((prevBubbles) => [...prevBubbles, ...Array(bubblesToAdd).fill(0)]);
      setBubbleCount(bubbleCount + bubblesToAdd - 1);
    }
  };

  const handlePopBubble = () => {
    setBubbleCount(bubbleCount - 1);
  };


  useEffect(() => {
    if (bubbleCount % 10 === 0 && bubbleCount !== 0 && bubbleCount !== 40) {
      console.log(bubbles)
      setBubbles([0])
      console.log(bubbles)
      setBubbles(Array(bubbleCount).fill(0));
    }
  }, [bubbleCount]);

  return (
    <div className="main">
      <Particles />

      <div id="bubbleCounter">{bubbleCount} bubbles remaining</div>

      {bubbleCount > 0 ? 
        <div id="bubble-wrapper">
          {bubbles.map((_, index) => (
              <Bubble key={index} onBubbleRizz={handleRizzBubble} onBubblePop={handlePopBubble} imageSource="/src/assets/bubble.png" imageClass="bubble bubble-image" />
          ))}
        </div>
      :
        <div id="bubble-wrapper">
            <h1>deez nuts</h1>
        </div>
      }


    </div>
  )
}

export default App
