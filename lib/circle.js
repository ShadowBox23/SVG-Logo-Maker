const Shape = require('./shape');

class Circle extends Shape {
    constructor (data) {
        super(data);
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.logoColor}" />`;
    }
}

module.exports = Circle;