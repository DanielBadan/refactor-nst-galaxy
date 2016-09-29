import { combineReducers } from 'redux';
import root from '../components/root';
import Star from '../components/Star';
import Axis from '../components/Axis';

const rootElements = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_ROOT':
      return root(action.wrapperId);
    case 'RESIZE':
      let rect = state.wrapper.node().getBoundingClientRect();
      state.svg.attr('width', rect.width).attr('height', rect.height);
      return state;
    default:
      return state;
  }
};

const axes = (state = {}, action) => {
  if (state[action.count]) {
    return;
  }

  switch (action.type) {
    case 'CREATE_AXIS':
      return {...state, [action.count]: new Axis(action.count, action.axesG)};
    default:
      return state;
  }
};

const stars = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_STAR':
      let newStar = new Star(action.data, action.space);
      return {...state, [action.id]: newStar};
    default:
      return state;
  }
};

export default combineReducers({stars, rootElements, axes});