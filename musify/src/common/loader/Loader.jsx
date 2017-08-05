import React from 'react';
import SiriWave from 'siriwavejs';

class Loader extends React.Component {

  componentDidMount() {
    const siriWave = new SiriWave({
    	container: document.getElementById('loader-container'),
    	width: 320,
    	height: 100,
    	speed: 0.02,
    	color: '#2498f3',
    	frequency: 2
    });

    siriWave.start()
  }

  render () {
    return (
      <div className="loader-body">
        <div id="loader-container"></div>
      </div>
    );
  }
}

export default Loader;
