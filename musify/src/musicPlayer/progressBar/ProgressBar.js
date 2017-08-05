import React from 'react';

const ProgressBar = ({ playPercentage }) => (
  <div id="audioplayer">
  	<div id="timeline">
  		<div style={{ marginLeft: isNaN(playPercentage) ? 0 : playPercentage }} id="playhead"></div>
  	</div>
  </div>
)

export default ProgressBar;
