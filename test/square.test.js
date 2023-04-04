const Square = require('../lib/circle');

describe('Square', () => {
    describe('Render', () => {
        it('should render a square', () => {
            const square = new Square({
                logoName: 'SVG',
                textColor: '#ffffff',
                bgColor: 'purple',
                logoShape: 'square',
            });
            expect(square.render()).toBe(
                `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" width="100" height="100" fill="purple" />
                </svg>`
            );
        });
    });
});