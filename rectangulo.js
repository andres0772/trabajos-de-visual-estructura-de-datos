class Rectangulo {
  constructor(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
  }

  calcularArea() { 
    const area = this.alto * this.ancho;
    return `El área del rectángulo con las medidas alto ${this.alto}cm y ancho ${this.ancho}cm es de ${area}`;
  }

  calcularPerimetro() {
    const perimetro = 2 * (this.alto + this.ancho);
    return `El perímetro del rectángulo con las medidas alto ${this.alto}cm y ancho ${this.ancho}cm es de ${perimetro}`;
  }
}

let rectangulo = new Rectangulo(5, 10);
console.log(rectangulo.calcularArea());
console.log(rectangulo.calcularPerimetro());