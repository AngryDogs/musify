import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchVideos } from '../../api/actions/search';
import './navbar.css';

const onSubmit = (event, props) => {
  event.preventDefault();
  props.dispatch(searchVideos(event.target.search.value));
};

const Navbar = props =>
  <div>
    <nav className="navbar">
      <form onSubmit={event => onSubmit(event, props)} className="form-inline">
        <h1 className="pr-3 x3d-text" style={{ fontFamily: 'floppywav', color: 'white' }}>
          MUSIFY
        </h1>
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
