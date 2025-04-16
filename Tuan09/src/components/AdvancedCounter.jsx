import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset, incrementByAmount, setStep } from '../store/slices/counterSlice';

const AdvancedCounter = () => {
  const [amount, setAmount] = useState('');
  const { value, step } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrementByAmount = () => {
    if (amount) {
      dispatch(incrementByAmount(Number(amount)));
      setAmount('');
    }
  };

  return (
    <div className="advanced-counter">
      <h2>Advanced Counter</h2>
      <div className="counter-container">
        <div className="counter-section">
          <div className="counter-display">
            <span className="counter-label">Current Value</span>
            <span className="counter-value">{value}</span>
          </div>
          
          <div className="counter-actions">
            <button className="action-btn" onClick={() => dispatch(decrement())}>-</button>
            <button className="action-btn reset" onClick={() => dispatch(reset())}>Reset</button>
            <button className="action-btn" onClick={() => dispatch(increment())}>+</button>
          </div>
        </div>

        <div className="counter-settings">
          <div className="setting-group">
            <label>Step Size</label>
            <div className="input-group">
              <input
                type="number"
                min="1"
                value={step}
                onChange={(e) => dispatch(setStep(e.target.value))}
                placeholder="Enter step size"
              />
            </div>
          </div>

          <div className="setting-group">
            <label>Custom Increment</label>
            <div className="input-group">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
              />
              <button 
                className="increment-btn"
                onClick={handleIncrementByAmount}
                disabled={!amount}
              >
                Add Amount
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedCounter; 