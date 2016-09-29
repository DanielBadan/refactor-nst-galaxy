import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import reducers from './reducers';

export default (data, wrapperId) => {
  const store = createStore(reducers, applyMiddleware(createLogger()));
  
  // Create root elements
  store.dispatch({type: 'CREATE_ROOT', wrapperId});
  // Set initial svg size
  store.dispatch({type: 'RESIZE'});

  // Create star
  store.dispatch({type: 'CREATE_STAR', data: data[0], id: 0, space: store.getState().rootElements.space});
};
