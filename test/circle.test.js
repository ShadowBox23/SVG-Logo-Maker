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
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="red" stroke="blue" stroke-width="2" /></svg>'
            );
        });
    });
});