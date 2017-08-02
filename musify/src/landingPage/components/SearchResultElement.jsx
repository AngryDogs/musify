import React from 'react';

const onVideoClick = (id) => {
  console.log(id);
}

const SearchResultElement = ({elementData}) => (
  <div className="search-element-component">
    <div className="search-element-row row" onClick={event => onVideoClick(elementData.id.videoId)}>
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

export default SearchResultElement;
