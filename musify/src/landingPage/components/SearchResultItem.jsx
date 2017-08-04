import React from 'react';
import { connect } from 'react-redux';
import { startStreaming } from '../../api/actions/player';

const onVideoClick = (id, dispatch) => {
  dispatch(startStreaming(id));
};

const SearchResultItem = ({ data, dispatch }) =>
  <div className="search-element-component">
    <div
      className="search-element-row row"
      onClick={event => onVideoClick(data.id.videoId, dispatch)}>
      <div className="col-4">
        <img
          className="search-image"
          alt={data.snippet.thumbnails.high.url}
          src={data.snippet.thumbnails.medium.url}
        />
      </div>
      <div className="col-8">
        <h4>
          {data.snippet.title}
        </h4>
        <p>
          {data.snippet.description}
        </p>
      </div>
    </div>
    <hr />
  </div>;

export default connect(state => state)(SearchResultItem);
