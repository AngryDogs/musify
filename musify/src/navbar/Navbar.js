import React from 'react';
import { Menu, Input } from 'antd';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions as searchActions } from '../searchResults';
import './navbar.css';

const onSubmit = (value, dispatch) => {
  dispatch(searchActions.searchVideos(value));
};

const Navbar = props => {
  return (
    <div>
      <Menu>
        <Menu.Item key="search">
          <Input.Search placeholder="Please enter keyphrase"
            className="search-input"
            onSearch={value => onSubmit(value, props.dispatch)}/>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default connect(state => state)(withRouter(Navbar));
