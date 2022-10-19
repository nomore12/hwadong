import React, { useEffect } from 'react';
import Router from 'src/router';
import './index.css';
import Cursor from './components/Cursor';
import MouseContextProvider from './components/context/MouseContext';

function App() {
  useEffect(() => {}, []);

  return (
    <div className="App">
      <Cursor />
      <Router />
    </div>
  );
}

export default App;
