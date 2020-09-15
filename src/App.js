import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import { HomePage } from './pages/HomePage/HomePage';
import { ShopPage } from './pages/ShopPage/ShopPage';
import { SignInSignUpPage } from './pages/SignIn-SignUpPage/SignIn-SignUpPage'
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/sign-in" component={SignInSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
