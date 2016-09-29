import { select } from 'd3-selection';

export default (wrapperId = '') => {
  const wrapper = select('#' + wrapperId);
  const svg = wrapper.append('svg');
  const defs = svg.append('defs');
  const space = svg.append('g');
  const axesG = defs.append('g');

  return {wrapper, svg, defs, space, axesG};
};