import React from 'react';

const UserMenu = props => {
  if (!props.userData) return null;

  const { name, avatar_url } = props.userData;

  return (
    <div className="menu">
      <span className="menu__name">{name}</span>
      <img src="" alt={avatar_url} className="menu__avatar" />
    </div>
  );
};

export default UserMenu;
