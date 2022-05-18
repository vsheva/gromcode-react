import React from 'react';

const SearchBar = ({ onFilterTextChange, onInStockChange, filterText, inStockOnly }) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={e => onFilterTextChange(e.target.value)}
      />
      <p>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={e => onInStockChange(e.target.checked)}
        />{' '}
        Only show products in stock
      </p>
    </form>
  );
};
export default SearchBar;
