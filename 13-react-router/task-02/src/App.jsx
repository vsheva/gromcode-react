import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Products from './Products.jsx';
import Home from './Home.jsx';

const App = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navigation__item">
            <Link to="/products">Products</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products" component={Products} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

//path="*"
//path="/*"

//<Route path='/products' component={Products}>
// нужно компоненту Products
//передать через свойство component={Products}
