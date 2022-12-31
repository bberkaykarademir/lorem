import React, { useState } from "react";
import data from "./data";

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (count > 0) {
      setText(data.slice(0, parseInt(count)));
    }
  };
  return (
    <div>
      <h1>Tired of Boring Lorem Ipsum?</h1>
      <form onSubmit={handleSubmit}>
        <p>Paragraphs:</p>
        <input onChange={(e) => setCount(e.target.value)} type="number" />
        <button>Generate</button>
      </form>
      <div>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </div>
  );
};

export default App;
