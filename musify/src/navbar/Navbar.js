import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions as searchActions } from '../searchResults';
import './navbar.css';

const onSubmit = (event, props) => {
  event.preventDefault();
  props.dispatch(searchActions.searchVideos(event.target.search.value));
};

function getRandomLogo() {
  return ['logo-text', 'rainbow-logo-text'][Math.floor(Math.random() * 2)];
}

const Navbar = props =>
  <div>
    <nav className="navbar">
      <form onSubmit={event => onSubmit(event, props)} className="form-inline">
        <h1 className={`pr-3 ${getRandomLogo()}`}>MUSIFY</h1>
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
  </div>;

export default connect(state => state)(withRouter(Navbar));
