import React from 'react';
import Loader from '../common/loader';
import { connect } from 'react-redux';
import SearchResultItem from './SearchResultItem';

const SearchResults = ({ isLoading, searchResults }) =>
  <div>
    {isLoading && <Loader />}
    <div className="container">
      {!isLoading &&
        searchResults.hasOwnProperty('items') &&
        searchResults.items
          //.filter(data => !data.id.kind.includes('channel')) // TODO: make sure we don't ask for channels for results
          .map((data, index) => <SearchResultItem data={data} key={index} />)}
    </div>
  </div>;

const mapStateToProps = state => ({
  isLoading: state.search.isLoading,
  searchResults: state.search.searchResults
});

export default connect(mapStateToProps)(SearchResults);
