import React from 'react';

const ProductCategoryRow = ({ category }) => {
  //const{category} = props //props.category //category

  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
};

export default ProductCategoryRow;
