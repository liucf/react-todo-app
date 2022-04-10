import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Another from "./Another";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }
  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="space-x-4">
          <Another name="Michael" />
          <span>{count}</span>
          <button
            className="border-1 rounded-md border-blue-900 bg-blue-600 px-6 py-1"
            onClick={increment}
          >
            +
          </button>
          <button
            className="border-1 rounded-md border-blue-900 bg-blue-600 px-6 py-1"
            onClick={decrement}
          >
            -
          </button>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-3xl font-bold text-red-600 no-underline">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {true && <p>{3 + 2}</p>}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
