import React, { useState } from 'react';  // Make sure useState is imported
import './App.css';

import Counter from './Counter';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "container dark" : "container"}>
      <h1>Click Counter App</h1>
      <Counter />
      <button className="btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}

export default App;
