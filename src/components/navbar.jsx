import React from "react";

const NavBar = ({ totalCounters, onReset }) => {
  console.log("NavBar - Rendered");
  return (
    <nav className='navbar navbar-light bg-light'>
      <a className='navbar-brand' href='/#'>
        NavBar{" "}
        <span className='badge rounded-pill bg-secondary'>{totalCounters}</span>
        <button
          type='button'
          onClick={onReset}
          className='btn btn-primary btn-sm m-2'>
          Reset
        </button>
      </a>
    </nav>
  );
};

export default NavBar;
