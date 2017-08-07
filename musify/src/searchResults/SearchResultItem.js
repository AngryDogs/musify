import React from 'react';
import { connect } from 'react-redux';
import { actions as musicPlayerActions } from '../musicPlayer';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'antd';

const SearchResultItem = ({ data, startStreaming }) =>
<div className="search-result-item">
  <Row gutter={16} onClick={() => startStreaming(data.id, data.contentDetails.duration)}>
    <Col span={6}>
      <img
        alt={data.snippet.thumbnails.high.url}
        src={data.snippet.thumbnails.medium.url}
      />
    </Col>
    <Col span={20}>
      <h4>
        {data.snippet.title}
      </h4>
      <p>
        {data.snippet.description.substring(0,250).trim()}...
      </p>
    </Col>
  </Row>
</div>

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      startStreaming: musicPlayerActions.startStreaming
    },
    dispatch
  );

export default connect(state => state, mapDispatchToProps)(SearchResultItem);
