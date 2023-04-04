const generateSVG = (shape) => {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${shape.render()}
    <text
    x="50%"
    y="${shape.logoShape != 'triangle' ? '50%' : '40%'}"
    text-anchor="middle"
    fill="${shape.Color}"
    font-size="2.5 rem" letter-spacing="2rem" dy=".4rem"
    font-family="sans-serif">${shape.logoName}
    </text>
    </svg>`;
};

module.exports = generateSVG;