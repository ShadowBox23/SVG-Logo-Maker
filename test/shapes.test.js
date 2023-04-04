const Shape = require('../lib/shape');

let testShapes = [
    {
        desc: 'should be an error if left empty',
        input: {},
        expectedError: new Error('Invalid input'),
    },
    {
        desc: 'should be an error if the text is longer than 3 letters',
        input: {logoName: 'test'},
        expectedError: new Error('Must only contain 3 characters'),
    },
    {
        desc: 'should be an error if the css input is not valid',
        input: {logoName: 'SVG', textColor: 'notColor'},
        expectedError: new Error('please enter a valid color'),
    },
    {
        desc: 'should be an error if the background color is not valid',
        input: {logoName: 'SVG', backgroundColor: 'notColor'},
        expectedError: new Error('please enter a valid color'),
    },
    {
        desc: 'should add background color if it is a valid color',
        input: {logoName: 'SVG', textColor: 'red', bgColor: 'blue'},
        expectedKey: 'bgColor',
        expectedValue: 'blue',
    },
    {
        desc:'should add text color if it is a valid color',
        input: {logoName: 'SVG', textColor: 'green', bgColor: 'blue'},
        expectedKey: 'textColor',
        expectedValue: 'green',
    },
];

describe('Shape test', () => {
    for (let tc of testShapes) {
      it(tc.desc, () => {
        if (tc.shouldRender) {
          const shape = new Shape(tc.input);
          expect(shape.render).toThrow(tc.expectedErr);
        } else if (tc.expectedErr) {
          const shape = () => new Shape(tc.input);
          expect(shape).toThrow(tc.expectedErr);
        } else {
          const shape = new Shape(tc.input);
          expect(shape[tc.expectedKey]).toBe(tc.expectedValue);
        }
      });
    }
  });