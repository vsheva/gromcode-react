import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { productId } = useParams();
  return <div className="product">{productId}</div>;
};

export default Product;

//rest

// const Product = (...rest) => {
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
