class Empleado {
    constructor(nombre, salario, puesto, aumento) {
      this.nombre = nombre;
      this.salario = salario;
      this.puesto = puesto;
      this.aumento = aumento;
    }

    incremento() {
        const nuevoSalario = this.salario + (this.salario * this.aumento / 100);
        return `El señor ${this.nombre} que ocupa el puesto de ${this.puesto} ganaba un total de ${this.salario} dólares, se le aplicó un incremento de ${this.aumento}%. 
        Su nuevo salario es de ${nuevoSalario} dólares`;
    }
}

let empleado = new Empleado("Andres", 2000, "Sistemas", 20);
console.log(empleado.incremento());