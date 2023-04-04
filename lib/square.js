const shape = require('./shape');

class Square extends shape {
    constructor(data) {
        super(data);
    }
    render() {
        return `<rect x="90" y="40" width="100" height="100" fill="${this.logoColor}"/>`;
    }
}

module.exports = Square;