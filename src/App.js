import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByVal } from './store/slice/counterSlice';
import BooksList from './Components/BooksList';
import Header from './Components/Header';
import { fetchProducts } from './store/slice/productSlice';
import { useEffect } from 'react';
import Products from './Components/Products';

function App() {
  // const count = useSelector((state) => state.counter.counter)
  // const value = useSelector((state) => state.counter.value)
  const {counter, value} = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
       <p>Counter: {counter}</p>
       <p>Value: {value}</p>
       <button onClick={()=>dispatch(increment())}>Increment</button>
       <button onClick={()=>dispatch(decrement())}>Decrement</button>
       <button onClick={()=>dispatch(incrementByVal(3))}>Increment by 3</button>
       <BooksList></BooksList>
       <Products></Products>
      </header>
    </div>
  );
}

export default App;
