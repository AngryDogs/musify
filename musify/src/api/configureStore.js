import rootReducer from './root';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

const configureStore = () => {
  const store = createStore(rootReducer, enhancer);

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept('./root', () => {
        store.replaceReducer(rootReducer);
      })
    }
  }
  return store;
}

export default configureStore;
