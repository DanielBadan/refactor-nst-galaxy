import { range } from 'lodash/util';
import { fill } from 'lodash/array';
import { select } from 'd3-selection';
import 'd3-selection-multi';
import 'd3-transition';
import { radialLine, curveLinearClosed } from 'd3-shape';
import { scaleLinear } from 'd3-scale';

class Axis {

  constructor(count = 0, axesG) {
    this.g = axesG.append('g');
    this.angleSlice = Math.PI * 2 / count;
    this.duration = 250;
    this.tempSize = 350;
    this.tempMaxValue = 10;
    this.tempLevelsCount = 2;
    this.tempScale = scaleLinear()
      .range([0, this.tempSize])
      .domain([0, this.tempMaxValue]);

    this.g.attr('id', `axes-count-${count}`);    

    this.drawLines(count);
    this.drawLevels(count);

    this.update = () => {
      this.updateLines(count);
      this.updateLevels(count);
    };

    // initial update
    this.update();
  }

  drawLines(count) {
    this.g.selectAll('line')
      .data(range(0, count))
      .enter()
      .append('line')
      .attrs({
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
      });

    this.g.selectAll('line')
      .styles({
        stroke: '#000000',
        strokeWidth: 1,
      });
  } 

  drawLevels(count) {
    this.g.selectAll('path')
      .data(range(0, this.tempLevelsCount))
      .enter()
      .append('path')
      .styles({
        strokeWidth: 1,
        stroke: '#000000',
        fill: 'none',
      });
  }

  updateLines() {
    this.g.selectAll('line')
      .transition()
      .attrs({
        x2: (d, i) => this.tempSize * Math.cos(this.angleSlice * i - Math.PI / 2),
        y2: (d, i) => this.tempSize * Math.sin(this.angleSlice * i - Math.PI / 2),
      });
  }

  updateLevels(count) {
    const lineGenerator = radialLine()
      .curve(curveLinearClosed)
      .angle((d, i) => {
        return i * this.angleSlice;
      });

    this.g.selectAll('path')
      .attr('d', (d, i) => {
        let value = this.tempMaxValue / this.tempLevelsCount * ++i;
        lineGenerator.radius((val) => {
          return this.tempScale(val);
        });
        return lineGenerator(fill(Array(count), value));
      });
  }
}

export default Axis;