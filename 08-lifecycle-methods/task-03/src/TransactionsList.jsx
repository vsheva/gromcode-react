import React, { Component } from 'react';
import Transaction from './Transaction.jsx';

class TransactionsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="transactions">
        {this.props.transactions.map(transaction => (
          <Transaction key={transaction.id} {...transaction} />
        ))}
      </ul>
    );
  }
}

export default TransactionsList;
