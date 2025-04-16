import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../store/slices/counterSlice';

const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <h2>Bộ đếm: {count}</h2>
      <div className="counter-buttons">
        <button onClick={() => dispatch(increment())}>Tăng</button>
        <button onClick={() => dispatch(decrement())}>Giảm</button>
      </div>
    </div>
  );
};

export default Counter; 