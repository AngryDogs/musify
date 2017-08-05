import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions as searchActions } from '../searchResults';
import './navbar.css';

const onSubmit = (event, props) => {
  event.preventDefault();
  props.dispatch(searchActions.searchVideos(event.target.search.value));
};

const Navbar = props => {
  const logo = ['logo', 'rainbow-logo'][Math.floor(Math.random() * 2)];
  return (
    <div>
      <nav className="navbar">
        <form onSubmit={event => onSubmit(event, props)} className="form-inline">
          <img className={logo} src={`/${logo}.svg`} alt="musify-logo" />
          <h1 className={`pr-3 ${logo}-text`}>MUSIFY</h1>
          <input
            name="search"
            className="form-control nav-input mr-sm-2"
            type="text"
            placeholder="Write here..."
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </nav>
    </div>
  );
};

export default connect(state => state)(withRouter(Navbar));
