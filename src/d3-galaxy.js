import { createStore } from 'redux'
import { rootElements } from './reducers';

export default (data, wrapperId) => {
  const store = createStore(rootElements);
  
  // create root elements
  store.dispatch({type: 'CREATE_ROOT', wrapperId});
  // set initial svg size
  store.dispatch({type: 'RESIZE'});

  console.log(store.getState());
};