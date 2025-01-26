import './App.css'
import Particles from "./components/Particles";
import Bubble from './components/Bubble';

function App() {
  let bubbleArray = [];

  for (let x = 0; x < 50; x++) {
    bubbleArray.push(<Bubble />)
  }

  return (
    <div className="main">
      <Particles />
      {bubbleArray}
    </div>
  )
}

export default App
