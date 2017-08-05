import React from 'react';
import ReactDOM from 'react-dom';
import App from './global/components/App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './api/configureStore';

import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./global/components/App', () => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    );
  });
}

registerServiceWorker();
