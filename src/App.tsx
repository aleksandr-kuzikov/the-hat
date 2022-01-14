import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Timer} from "./components/Timer/Timer";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Timer />
    </div>
  );
}

export default App;
