import React from 'react';

const Navbar = () => (
  <div>
    <nav className="navbar">
      <form className="form-inline">
        <input className="form-control nav-input mr-sm-2" type="text" placeholder="Write here..." />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </nav>
  </div>
);

export default Navbar;
