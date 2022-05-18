import React from 'react';
import ProductTable from './ProductTable.jsx';
import SearchBar from './SearchBar.jsx';

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false,
    };
  }

  handleFilterTextChange = filterText => {
    this.setState({
      filterText: filterText,
    });
  };

  handleInStockChange = inStockOnly => {
    this.setState({
      inStockOnly: inStockOnly,
    });
  };

  render() {
    const { filterText, inStockOnly } = this.state;
    // this.state = {
    //     filterText: '',
    //     inStockOnly: false,
    // };

    //filterText
    //inStockOnly

    return (
      <div>
        <SearchBar
          // filterText={this.state.filterText}
          // inStockOnly={this.state.inStockOnly}
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
