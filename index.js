import d3Galaxy from './src/d3-galaxy';

const maxValue = 10;
const getValue = () => parseFloat((Math.random() * maxValue).toFixed(1));

var data = [
  {
    label: 'Root',
    value: getValue(),
    maxValue,
    data: [
      {
        label: 'Leadership',
        value: getValue(),
      },
      {
        label: 'People',
        value: getValue(),
      },
      {
        label: 'Strategy',
        value: getValue(),
      },
      {
        label: 'Resources',
        value: getValue(),
      },
      {
        label: 'Processes',
        value: getValue(),
      },
    ],
  },
];

const northstar = d3Galaxy(data, 'root');