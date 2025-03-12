import { useReducer, useState } from "react";

const initialState = { result: 0 };

const calculatorReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { result: action.payload.num1 + action.payload.num2 };
    case "SUBTRACT":
      return { result: action.payload.num1 - action.payload.num2 };
    case "MULTIPLY":
      return { result: action.payload.num1 * action.payload.num2 };
    case "DIVIDE":
      return { result: action.payload.num2 !== 0 ? action.payload.num1 / action.payload.num2 : "Không thể chia cho 0" };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export default function Bai1() {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", textAlign: "center" }}>
      <h2>Máy tính</h2>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
        style={{ width: "80%", padding: "8px", margin: "5px" }}
        placeholder="Nhập số thứ nhất"
      />
      <br />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
        style={{ width: "80%", padding: "8px", margin: "5px" }}
        placeholder="Nhập số thứ hai"
      />
      <br />

      <button onClick={() => dispatch({ type: "ADD", payload: { num1, num2 } })} style={buttonStyle}>+</button>
      <button onClick={() => dispatch({ type: "SUBTRACT", payload: { num1, num2 } })} style={buttonStyle}>−</button>
      <button onClick={() => dispatch({ type: "MULTIPLY", payload: { num1, num2 } })} style={buttonStyle}>×</button>
      <button onClick={() => dispatch({ type: "DIVIDE", payload: { num1, num2 } })} style={buttonStyle}>÷</button>
      <br />
      <button onClick={() => dispatch({ type: "RESET" })} style={{ ...buttonStyle, backgroundColor: "gray" }}>Reset</button>

      <h3>Kết quả: {state.result}</h3>
    </div>
  );
}

const buttonStyle = {
  margin: "5px",
  padding: "10px 15px",
  fontSize: "16px",
  cursor: "pointer",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#007bff",
  
};
