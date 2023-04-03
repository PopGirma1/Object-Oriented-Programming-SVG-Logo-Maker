const { Circle_Shape_SVG, Square_Shape_SVG, Triangle_Shape_SVG,Elpse_Shaped_SVG } = require("./shapes.js")
// Imports the Circle_Shape_SVG, Square_Shape_SVG, and Triangle_Shape_SVG shape classes from the 'shapes.js' module and defines a test suite for the shape class.  
// The test case checks whether "Circle_Shape_SVG, Square_Shape_SVG, and Triangle_Shape_SVG" object can be rendered correctly by calling the render method and comparing the result to an expected SVG string.

// Circle_Shape_SVG 
describe('Circle_Shape_SVG', () => {
  test('renders correctly', () => {
    let shape = new Circle_Shape_SVG();
    var color = ('blue')
    shape.setColor(color);
    expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"/>`);
  });
});
// Square_Shape_SVG Shape
describe('Square_Shape_SVG', () => {
  test('renders correctly', () => {
    const shape = new Square_Shape_SVG();

    var color = ('green')

    shape.setColor(color);

    expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}"/>`);
  });
});
// Triangle_Shape_SVG Shape
describe('Triangle_Shape_SVG', () => {
  test('renders correctly', () => {
    const shape = new Triangle_Shape_SVG();
    var color = ('pink')
    shape.setColor(color);
    expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}"/>`);

  });
});


// Elpse_Shaped_SVG Shape
describe('Elpse_Shaped_SVG', () => {
  test('renders correctly', () => {
    const shape = new Elpse_Shaped_SVG();
    var color = ('pink')
    shape.setColor(color);
    expect(shape.render()).toEqual(`<ellipse cx="150" cy="120" rx="150" ry="70" fill="${color}"/>`);

  });
});
