import React from "react";
import logo from "./logo.svg";
import "./App.css";

const anagrams = (word: string): string => {
  return word.split('').map((character: string, index: number) => {
    const head = word.slice(0, index);
    const tail = word.substring(index+1);
    const result: string[] = [];
    for (let nextCharInTail of head) {
      result.push(character + nextCharInTail);
    }
    for (let nextCharInTail of tail) {
      result.push(character + nextCharInTail);
    }
    return result;
  }).join(" ");
};

const toggleLetters = (str?, index1?, index2?) => {
  if (index1 !== index2) {
    var temp = str[index1];
    str[index1] = str[index2];
    str[index2] = temp;
  }
  return str.join("");
}

const findAllPermutations = (str, index?, buffer?) => {
  if (typeof str == "string") str = str.split("");
  if (typeof index == "undefined") index = 0;
  if (typeof buffer == "undefined") buffer = [];
  if (index >= str.length) return buffer;
  for (var i = index; i < str.length; i++) {
    buffer.push(toggleLetters(str, index, i));
  }
  return findAllPermutations(str, index + 1, buffer);
}

function App() {
  const [displayMessage, setDisplayMessage] = React.useState(false);
  const [name, setName] = React.useState("");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-body">
        <label htmlFor="name" className="item padding">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="padding"
          onChange={(event) => setName(event.currentTarget.value)}
        />
        <button onClick={() => setDisplayMessage(true)} className="padding">
          Submit
        </button>

        {displayMessage && <p className="item">{findAllPermutations(name)}</p>}
      </div>
      <div className="App-footer padding">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
