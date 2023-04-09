const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');

const makeShape = (data) => {
    switch (data.logoShape) {
        case 'circle':
            return new Circle(data.radius);
            break;
        case'square':
            return new Square(data.side);
            break;
        case 'triangle':
            return new Triangle(data.side1, data.side2, data.side3);
            break;
        default:
            throw new Error('Invalid shape');
            break;
    }
};

module.exports = makeShape;