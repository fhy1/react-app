import React from "react";
import logo from "./logo.svg";
import { Button } from "antd";
import "./App.less";
import styles from "./Appe.module.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button type="primary">Button</Button>
        <img src={logo} className="App-logo" alt="logo" />
        <p className={styles.pp}>hahahaha</p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
