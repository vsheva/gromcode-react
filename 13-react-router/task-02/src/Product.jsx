import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { productId } = useParams();
  return <div className="product">{productId}</div>;
};

export default Product;

//rest

//v1
// const Product = ({...rest}) => {
//   console.log(rest)
//
//   return (
//       <div className="product">
//         Product
//       </div>
//
//   );
// };
//
// export default Product;


//v2
// const Product = ({match}) => {
//   console.log(rest)
//
//   return (
//       <div className="product">
//         {match.params.productId}
//       </div>
//
//   );
// };
//
// export default Product;
