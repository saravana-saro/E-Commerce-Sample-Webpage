import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import ProductDescription from './ProductDescription';

function App() {
  return (
    <Router>
      <div className="App">
        <Header cartCount={0} />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/product/:id" component={ProductDescription} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
