import React from 'react';
import Loader from '../../global/components/Loader';
import { connect } from 'react-redux';
import SearchResultElement from './SearchResultElement';

const SearchResults = (props) => (
  <div>
    { props.search.isLoading && <Loader /> }
    <div className="container">
      { !props.search.isLoading && props.search.searchResults.hasOwnProperty("items") &&
        props.search.searchResults.items.map((element, index) => {
          console.log(element);
          return <SearchResultElement elementData={ {...element}} key={index} />
        })
      }
    </div>
  </div>
)

export default connect(state => state)(SearchResults);
