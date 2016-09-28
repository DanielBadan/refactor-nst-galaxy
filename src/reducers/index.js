import root from '../components/root';

export const rootElements = (state = {}, action) => {
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