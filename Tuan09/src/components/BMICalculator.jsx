import { useDispatch, useSelector } from 'react-redux';
import { updateInput, calculateBMI, resetBMI } from '../store/slices/bmiSlice';

const BMICalculator = () => {
  const dispatch = useDispatch();
  const { height, weight, result, category } = useSelector((state) => state.bmi);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(calculateBMI());
  };

  return (
    <div className="bmi-calculator">
      <h2>Tính chỉ số BMI</h2>
      <div className="calculator-container">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="form-control">
              <label>Chiều cao (cm)</label>
              <input
                type="number"
                name="height"
                value={height}
                onChange={(e) => dispatch(updateInput({ name: 'height', value: e.target.value }))}
                required
              />
            </div>
            <div className="form-control">
              <label>Cân nặng (kg)</label>
              <input
                type="number"
                name="weight"
                value={weight}
                onChange={(e) => dispatch(updateInput({ name: 'weight', value: e.target.value }))}
                required
              />
            </div>
          </div>
          <div className="button-group">
            <button type="submit" className="calculate-btn">Tính BMI</button>
            <button type="button" className="reset-btn" onClick={() => dispatch(resetBMI())}>
              Làm mới
            </button>
          </div>
        </form>
        {result && (
          <div className="result-container">
            <div className="result-box">
              <h3>Kết quả</h3>
              <div className="bmi-value">{result}</div>
              <div className={`bmi-category ${category.toLowerCase()}`}>
                {category}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator; 