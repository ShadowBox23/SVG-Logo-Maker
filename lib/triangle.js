const shape = require('./shape')

class Triangle extends Shape {
    constructor(data) {
        super(data)
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
    }
}

module.exports = Triangle;