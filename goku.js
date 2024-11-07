class Goku {
    constructor(nombre, nivel) {
      this.nombre = nombre;
      this.nivel = nivel;
    }
  
    mostrarTransformacion() { 
      return `${this.nombre} está en la transformación: ${this.nivel}`;
    }
  
    transformar(nuevaTransformacion) {
      this.nivel = nuevaTransformacion;
      return `${this.nombre} se ha transformado en: ${this.nivel}!`;
    }
  
    volverFormaBase() {
      this.nivel = 'base';
      return `${this.nombre} ha vuelto a su forma base.`;
    }
  }
  
  let goku = new Goku("Goku", "base");
  console.log(goku.mostrarTransformacion());
  console.log(goku.transformar("super sayajin"));
  console.log(goku.volverFormaBase());
