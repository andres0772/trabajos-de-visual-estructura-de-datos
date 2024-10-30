console.log("actividad 1 ")
var alturas = [1.65, 1.72, 1.58, 1.85, 1.68] // el arreglo tipo float

var suma = eval(alturas.join('+'));//este comando me permite hacer la suma de los valores del arreglo
var promedio = suma / 5 //se divide por el numero de personas registradas
var masAltas = 0
var masBajas = 0

alturas.forEach(altura => { //me permite hacer el recorrido del arreglo
  if (altura >= promedio) masAltas++ //una condicion dependiendo del valor del promedio
  else if (altura <= promedio) masBajas++
})
//imprimacion de los resultados
console.log("Alturas: " +  alturas)
console.log("Promedio: " + promedio.toFixed(2))// este comando me permite reducir los valores decimales a 2 digitos
console.log("Personas más altas que el promedio: " + masAltas)
console.log("Personas más bajas que el promedio: " + masBajas)

console.log("------------------------------------------------------")

//segundo ejercicio
console.log("actividad 2")
const frutas = ["manzana", "pera", "platano", "cereza"]
console.log("ubicacion de la palabra platano en el array ")
const index = frutas.indexOf("platano")//Buscar la posicion de la palabra platano
console.log("platano esta en la posicion " + index)
frutas.push("mango")
console.log('implementacion de mango en el array')
frutas.forEach((elemento, index) => {
    console.log(`${elemento} en la posición ${index}`)
})
console.log(frutas)
frutas.unshift("fresa")
console.log('implementacion de fresa en el array')
frutas.forEach((elemento, index) => {
    console.log(`${elemento} en la posición ${index}`)
})
console.log(frutas)
frutas.shift()//Eliminar el primer elemento del array
console.log('eliminacion de fresa en el array')
frutas.forEach((elemento, index) => {
    console.log(`${elemento} en la posición ${index}`)
})
console.log(frutas)
frutas.pop()
console.log('eliminacion de mango en el array')
frutas.forEach((elemento, index) => {
    console.log(`${elemento} en la posición ${index}`)
})
console.log("estado del array ")
+ console.log(frutas)
