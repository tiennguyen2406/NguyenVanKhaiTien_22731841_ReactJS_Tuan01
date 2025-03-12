import React, { useState } from "react";

const Bai3 = () => {

  const [todos, setTodos] = useState(["Todo 1", "Todo 2"]);


  const [count, setCount] = useState(0);


  const increment = () => {
    setCount(count + 1);
    console.log("Đang tính toán");
  };

  const addTodo = () => {
    setTodos([...todos, `Todo ${todos.length + 1}`]);
    console.log("Thêm công việc thành công");
  };

  return (
    <div style={containerStyle}>
      <h2>Danh sách công việc</h2>
      {}
      <Todos todos={todos} />

      {}
      <button style={buttonStyle} onClick={addTodo}>Thêm công việc</button>

      <hr />

      {}
      <div>
        <h3>Count: {count}</h3>
        <button style={buttonStyle} onClick={increment}>Tăng +</button>
      </div>
    </div>
  );
};


const Todos = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
};


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

export default Bai3;
