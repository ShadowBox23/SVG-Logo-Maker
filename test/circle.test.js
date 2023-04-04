const Circle = require('../lib/circle');

describe('Circle', () => {
    describe('Render', () => {
        it('should render a circle', () => {
            const circle = new Circle({
                logoName: 'SVG',
                textColor: 'red',
                bgColor: 'blue',
                logoShape: 'circle',
            });
            expect(circle.render()).toBe(
                '<circle cx="150" cy="100" r="80" fill="${this.logoColor}" /> '
            );
        });
    });
});