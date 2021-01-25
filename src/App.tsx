import {useRecoilState} from 'recoil';
import { counterState } from './atoms/atoms'
import './App.css';

function App() {
  const [counter, setCounter] = useRecoilState(counterState);

  return (
    <div className="App">
      <h2>Recoil Typescript</h2>
      <h4>{counter}</h4>
      <button onClick={() => setCounter(counter + 1)}>Inc</button>
    </div>
  );
}

export default App;
