import React from 'react';

function NavBar() {
  return (
    <div className="nav-bar">
      <i className="fa-solid fa-chevron-left" />
      <p>Continents</p>
      <div className="right-nav">
        <i className="fa-solid fa-microphone" />
        <i className="fa-solid fa-gear" />
      </div>
    </div>
  );
}

export default NavBar;
