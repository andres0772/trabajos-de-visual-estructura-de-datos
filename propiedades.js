class Propiedad {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    identificador() { 
      if (this.edad >= 18) {
        return `La persona ${this.nombre} es mayor de edad`;
      } else {
        return `La persona ${this.nombre} no es mayor de edad`;
      }
    }
  }
  
  let propiedad = new Propiedad("Andres", 17);
  console.log(propiedad.identificador());
