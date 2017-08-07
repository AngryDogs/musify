import React from 'react';
import Loader from '../common/loader';
import { connect } from 'react-redux';
import SearchResultItem from './SearchResultItem';
import { Row, Col } from 'antd';

const SearchResults = ({ isLoading, searchResults }) =>
  <div>
    <Row gutter={16}>
      <Col span={12} offset={6}>
        {!isLoading &&
          searchResults.hasOwnProperty('items') &&
          searchResults.items
            .map((data, index) => <SearchResultItem data={data} key={index} />)}
      </Col>
    </Row>
  </div>;

const mapStateToProps = state => ({
  isLoading: state.search.isLoading,
  searchResults: state.search.searchResults
});

export default connect(mapStateToProps)(SearchResults);
