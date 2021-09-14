import React from 'react';

import Counter from './components/Counter';
import Header from './components/Header';
import Toggle from './components/Toggle';

import logo from './logo.svg';
import './App.css';

function App() {
  let headline = React.createElement('h1', null, 'Hello world')
  return (
    <div className="App">
      <Header>
        {headline}
      </Header>
      <Toggle />
      <p>Hello world!</p>
      <Counter />
    </div>
  );
}

export default App;
