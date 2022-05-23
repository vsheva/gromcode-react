import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Product from './Product.jsx';

const Products = ({ match }) => {
  return (
    <div className="page__content">
      <h1>Products</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to={`${match.url}/book`}>Book</Link>
        </li>
        <li className="navigation__item">
          <Link to={`${match.url}/ball`}>Ball</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={match.url}>
          <span>Select a product please</span>
        </Route>
        <Route path={`${match.url}/:productId`}>
          <Product />
        </Route>
      </Switch>
    </div>
  );
};

export default Products;

//version 2

// const Products = ({match}) => {
//     return (
//         <div className="page__content">
//             <h1>Products</h1>
//             <ul className="navigation">
//                 <li className="navigation__item">
//                     <Link to={`${match.url}/book`}>Book</Link>
//                 </li>
//                 <li className="navigation__item">
//                     <Link to={`${match.url}/ball`}>Ball</Link>
//                 </li>
//             </ul>
//
//             <Switch>
//                 <Route exact path={match.url}><span>Select a product please</span></Route>
//                 <Route path={`${match.url}/:productId`} component={Product} />
//             </Switch>
//
//         </div>
//     );
// };
//
// export default Products;

//params and  component={Product

// const Products = () => {
//     return (
//         <div className="page__content">
//             <h1>Products</h1>
//             <ul className="navigation">
//                 <li className="navigation__item">
//                     <Link to ="/products/book">Book</Link>
//                 </li>
//                 <li className="navigation__item">
//                     <Link to= "/products/ball">Ball</Link>
//                 </li>
//             </ul>
//
//             <Switch>
//                 <Route exact path='/products'><span>Select a product please</span></Route>
//                 <Route path="/products/:productId" component={Product} />
//             </Switch>
//
//         </div>
//     );
// };
//
// export default Products;

//<Product />

//  to ="/products/book"
//  to= "/products/ball"
