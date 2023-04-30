import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useSelector, useDispatch } from 'react-redux'

import { increment, decrement,incrementBy } from "./redux/feature/couterSlice"

function App() {
  const counter = useSelector(state => state.counter.counter);
  const dispatch = useDispatch();
  return (
    <>
      <div className="card">
        <h1>{counter}</h1>
        <button onClick={() => dispatch(increment())}>
          Add
        </button>
        <button onClick={() => dispatch(decrement())}>
          Remove
        </button>
        <button onClick={() => dispatch(incrementBy(10))}>
          Additionally + 10 more
        </button>
      </div>
    </>
  )
}

export default App
