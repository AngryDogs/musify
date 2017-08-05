import React from 'react';
import { connect } from 'react-redux';
import { actions as musicPlayerActions } from '../../musicPlayer';
import { bindActionCreators } from 'redux';

const SearchResultItem = ({ data, startStreaming }) =>
  <div className="search-element-component">
    <div className="search-element-row row" onClick={() => startStreaming(data.id.videoId)}>
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      startStreaming: musicPlayerActions.startStreaming
    },
    dispatch
  );

export default connect(state => state, mapDispatchToProps)(SearchResultItem);
