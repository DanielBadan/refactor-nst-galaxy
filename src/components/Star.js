class Star {
  constructor({label, value, maxValue}, space) {
    this.createRootElements(space);
  }

  createRootElements(space) {
    this.root = space.append('g');
  }
}

export default Star;