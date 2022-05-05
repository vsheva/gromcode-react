import React, { Component } from 'react';
import User from './User.jsx';



class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sorting: null,
    };
  }

  toggleSorting = () => {
    const newSorting = this.state.sorting === 'asc' ? 'desc' : 'asc';
    this.setState({
      sorting: newSorting
    });
  };



  render() {
   console.log(this.props.users) //данные массива, которые приходят через свойство
    let usersList;
    //сортировка не сразу - проверить, есть ли сортировка
    if (this.state.sorting) {
      usersList = this.props.users
        .slice()
        .sort((a, b) => (this.state.sorting === 'asc' ? a.age - b.age : b.age - a.age));
    } else {
      // если сортировка никакая не установлена- то отрисовывать неизменный массив пользователей,
      // которые получаем через properties (props, свойства)
      usersList = this.props.users;
    }

    return (
      <div>
        <button className="btn" onClick={this.toggleSorting}>
          {this.state.sorting || '-'}
        </button>

        <ul className="users">{usersList.map(user => (<User key={user.name} name={user.name} age={user.age} />))}</ul>
      </div>
    );
  }
}

export default UsersList;
