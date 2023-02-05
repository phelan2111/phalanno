import React from "react";
import Style from "assets/scss/home.module.scss";

function App() {
  return (
    <div className="Home">
      <header className="App-header">
        <img
          src={
            "https://i.pinimg.com/564x/d1/d0/7d/d1d07dcc79c9d75288846abafbb427ec.jpg"
          }
          className="App-logo"
          alt="logo"
        />
        <p className={Style["home"]}>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn Reacts 1 2 3
        </a>
      </header>
    </div>
  );
}

export default App;
