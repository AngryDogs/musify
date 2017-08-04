import React from 'react';
import { connect } from 'react-redux';
import { startStreaming } from '../../api/actions/player';

const onVideoClick = (id, dispatch) => {
  dispatch(startStreaming(id));
}

const SearchResultElement = ({elementData, dispatch}) => (
  <div className="search-element-component">
    <div className="search-element-row row" onClick={event => onVideoClick(elementData.id.videoId, dispatch)}>
      <div className="col-4">
        <img className="search-image"
          alt={ elementData.snippet.thumbnails.high.url }
          src={ elementData.snippet.thumbnails.medium.url } />
      </div>
      <div className="col-8">
        <h4>
          {elementData.snippet.title}
        </h4>
        <p>
          {elementData.snippet.description}
        </p>
      </div>
    </div>
    <hr />
  </div>
)

export default connect(state => state)(SearchResultElement);
