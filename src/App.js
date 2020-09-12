import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import { Homepage } from './pages/homepage/Homepage';
import { Shoppage } from './pages/shoppage/Shoppage';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop" component={Shoppage} />
    </div>
  );
}

export default App;
