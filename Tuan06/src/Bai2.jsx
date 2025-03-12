import { useState, useMemo } from "react";

const Bai2 = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = () => {
    setTodos((t) => [...t, `Todo ${t.length + 1}`]);
  };

  return (
    <div style={containerStyle}>
      <div>
        <h3>Giá trị: {count}</h3>
        <button style={buttonStyle} onClick={increment}>Tăng +</button>

        <h2>Kết quả tính toán</h2>
        <p>{calculation}</p>
      </div>
    </div>
  );
};

// Hàm tính toán giả lập độ trễ
const expensiveCalculation = (num) => {
  console.log("Đang tính toán...");
  let result = num;
  for (let i =1 ; i <= 0; i++) {
    result += 1;
  }
  return result;
};

// Style đơn giản (không cần Tailwind)
const containerStyle = {
  maxWidth: "400px",
  margin: "50px auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "10px",
  textAlign: "center",
};

const buttonStyle = {
  margin: "5px",
  padding: "10px 15px",
  fontSize: "16px",
  cursor: "pointer",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#007bff",
  color: "white",
};

export default Bai2;
