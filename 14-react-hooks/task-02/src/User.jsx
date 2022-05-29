import React, { useState, useEffect } from 'react';

const User = ({ match }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${match.params.userId}`)
      .then(response => {
        if (response) {
          return response.json();
        }
        throw new Error();
      })
      .then(userData => {
        setUserData(userData);
      });
  }, [match.params.userId]);

  if (!userData) {
    return null;
  }

  const { avatar_url, name, location } = userData;

  return (
    <div className="user">
      <img alt="Board Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

export default User;

//starting code with state(old)

// class User extends Component {
//     state = {
//       user: null,
//   }
//
//
//   componentDidMount() {
//     this.fetchUserData();
//   }
//
//   componentDidUpdate(prevProps) {
//     const prevUser = prevProps.match.params.userId;
//     const currentUser = this.props.match.params.userId;
//
//     if (prevUser !== currentUser) {
//       this.fetchUserData();
//     }
//   }
//
//   fetchUserData() {
//     const { match } = this.props;
//      // console.log(this.props)  //1* {history:{}, location:{}, match:{params:{userId:"gitHub"}} }
//     fetch(`https://api.github.com/users/${match.params.userId}`)
//       .then(response => {
//         if (response) {
//           return response.json();
//         }
//         throw new Error();
//       })
//       .then(data => {
//           //console.log(data)    //2* данные с сервера github в виде обьекта {login: .., avatar_url: , name, location }
//         this.setState({
//           user: data,
//         });
//       });
//   };
//
//   render() {
//     if (!this.state.user) {
//       return null;
//     }
//           //console.log(this.state.user) //наши данные с сервера github в виде обьекта
//       const {avatar_url, name, location} = this.state.user
//
//     return (
//
//       <div className="user">
//         <img alt="Board Avatar" src={avatar_url} className="user__avatar" />
//         <div className="user__info">
//           <span className="user__name">{name}</span>
//           <span className="user__location">{location}</span>
//         </div>
//       </div>
//     );
//   }
// }

// export default User;

//сырой код

// import React, { Component } from 'react';
//
// class User extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: null,
//     };
//   }
//
//   componentDidMount() {
//     fetch(`https://api.github.com/users/${this.props.userId}`)
//         .then(response => response.json())
//         .then(data => {
//           this.setState({ user: data });
//         });
//   }
//
//
//   render() {
//
//     if (!this.state.user) {
//       return null;
//     }
//
//
//     return (
//         <div className="user">
//           <img alt="Board Avatar" src={this.state.user.avatar_url} className="user__avatar" />
//           <div className="user__info">
//             <span className="user__name">{this.state.user.name}</span>
//             <span className="user__location">{this.state.user.location}</span>
//           </div>
//         </div>
//     );
//   }
// }
//
// export default User;
//

//const { user } = this.state;
//const { avatar_url, location, name } = user;
