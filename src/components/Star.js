class Star {
  constructor({label, value, maxValue}, space) {
    this.createRootElements(space);
  }

  createRootElements(space) {
    this.root = space.append('g');
    this.root
      .append('use')
      .attr('href', '#axes-count-5');
  }
}

export default Star;