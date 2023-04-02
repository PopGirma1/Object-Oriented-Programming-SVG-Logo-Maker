
class mySvgShapes {
    constructor() {
        this.SVG_color = ''
    }
    setColor(SVG_color) {
        this.SVG_color = (SVG_color);
    }
}

// Defines a Circle class that extends mySvgShapes and renders an SVG Circle with position, size, and fill color based on the current instance's properties.
class Circle_Shape_SVG extends mySvgShapes {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`
    }
}

// Defines a Square class that extends Shape and renders an SVG Square with position, size, and fill color based on the current instance's properties.
class Square_Shape_SVG extends mySvgShapes {
    render() {
        return `<rect x="50" height="200" width="200" fill="${this.color}"/>`
    }
}
// Defines a Triangle(Polygon) class that extends Shape and renders an SVG Triangle(Polygon) with position, size, and fill color based on the current instance's properties.
class Triangle_Shape_SVG extends mySvgShapes {
    render() {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"/>`
    }
};


class Elpse_Shaped_SVG extends mySvgShapes {
    render() {
        return `<ellipse cx="100" cy="50" rx="100" ry="50" fill="${this.color}"/>`
    }
}
module.exports = { Circle_Shape_SVG, Square_Shape_SVG, Triangle_Shape_SVG, Elpse_Shaped_SVG } 