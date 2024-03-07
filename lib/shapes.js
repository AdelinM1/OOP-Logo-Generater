class Shape {
    constructor() {
      this.color = "";
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render(text, textColor) {
      throw new Error("The render method must be implemented by subclasses.");
    }
  }
  
  class Triangle extends Shape {
    render(text, textColor) {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
        <text x="150" y="120" font-family="Arial, sans-serif" font-size="24" fill="${textColor}" text-anchor="middle">${text}</text>
      </svg>`;
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius || 80;
    }
  
    render(text, textColor) {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
        <circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />
        <text x="150" y="120" font-family="Arial, sans-serif" font-size="24" fill="${textColor}" text-anchor="middle">${text}</text>
      </svg>`;
    }
  }
  
  class Square extends Shape {
    constructor(width, height) {
      super();
      this.width = width || 200;
      this.height = height || 100;
    }
  
    render(text, textColor) {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
        <rect x="50" y="50" width="${this.width}" height="${this.height}" fill="${this.color}" />
        <text x="150" y="120" font-family="Arial, sans-serif" font-size="24" fill="${textColor}" text-anchor="middle">${text}</text>
      </svg>`;
    }
  }
  
  module.exports = { Shape, Triangle, Circle, Square };