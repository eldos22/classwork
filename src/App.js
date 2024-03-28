import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByVal } from './store/slice/counterSlice';
import { deleteBook } from './store/slice/bookSlice';

function App() {
  // const count = useSelector((state) => state.counter.counter)
  // const value = useSelector((state) => state.counter.value)
  const {counter, value} = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const books = useSelector((state) => state.books.book)
  return (
    <div className="App">
      <header className="App-header">
       <p>Counter: {counter}</p>
       <p>Value: {value}</p>
       <button onClick={()=>dispatch(increment())}>Increment</button>
       <button onClick={()=>dispatch(decrement())}>Decrement</button>
       <button onClick={()=>dispatch(incrementByVal(3))}>Increment by 3</button>
       <p>Books: {book}</p>
      </header>
    </div>
  );
}

export default App;
