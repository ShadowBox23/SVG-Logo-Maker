const Triangle = require('../lib/circle');

describe('Triangle', () => {
    describe('Render', () => {
        it('should render a triangle', () => {
            const triangle = new Triangle({
                logoName: 'SVG',
                textColor: 'yellow',
                bgColor: '#000000',
                logoShape: 'triangle',
            });
            expect(triangle.render()).toBe(
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">' +
                    '<path fill="yellow" d="M 50 0 L 0 50 L 50 100 z" />' +
                '</svg>'
            );
        });
    });
});