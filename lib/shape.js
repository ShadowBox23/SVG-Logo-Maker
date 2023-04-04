class Shape {
    constructor({logoName, textColor, logoColor, logoShape}) {
        this.logoShape = logoShape;

        this.validTextInput(logoName);
        this.logoName = logoName;
        
        this.validColorInput(textColor);
        this.textColor = textColor;
        
        this.validColorInput(logoColor);
        this.logoColor = logoColor;
    }
    ifInputEmpty(input) {
        if (!input) throw new Error('Input is empty');
    }
    validTextInput(input) {
        this.ifInputEmpty(input);
        if (input.length > 3) {
            throw new Error('Too many characters');
        }
    }
    validateColorInput(input) {
        this.ifInputEmpty(input);
        if (!isCss3Color(input)) {
            throw new Error('Please enter a vaild css color keyword or hex code');
          }
        }
      
        render() {
          throw new Error('Child shapes must implement a render() method');
        }
      }
      module.exports = Shape;