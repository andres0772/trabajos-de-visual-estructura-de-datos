class HashTable { //se crea la hastable con identificador de tamaño, con mensaje donde indica que tiene que ser numeros positivos el tamaño.
    constructor(tamaño) {
    if (tamaño <= 0) {
    throw new Error("Tamaño debe ser positivo");
    }
    this.tamaño = tamaño; //esta parte hace que los espacios libres del hashtable se identifiquen como null
    this.tabla = new Array(tamaño).fill(null);
    }
   
    hash(clave) { //aqui identifica el indice dependiendo del tamaño del hashtable
    return clave % this.tamaño;
    }
   
    agregar(clave, valor) {// permite agregar los datos de los dependiendo del tamaño de la lista
        if (this.tabla.filter(x => x !== null).length >= this.tamaño) {
        throw new Error("Tabla llena");// si en caso se agrega mas datos que exceden al tamaño de la lista lanzara un error con un mensaje de tabla llena
        }
        const índice = this.hash(clave);
        if (this.tabla[índice] === null) {
        this.tabla[índice] = { clave, valor };// tambien se agrego la forma en que si hay 2 datos con el mismo indice se agregen al espacio libre que hay.
        } else {
        let índiceActual = (índice + 1) % this.tamaño;
        while (this.tabla[índiceActual] !== null) {
        índiceActual = (índiceActual + 1) % this.tamaño;
        if (índiceActual === índice) {
        throw new Error("Tabla llena");
        }
        }
        this.tabla[índiceActual] = { clave, valor };
        }
       }
   
    eliminar(clave) { //aqui hace un recorrido de la lista en busca del indice que se va a borrar, una ves ubicado borra el dato y lo cambia por null para identificar que ese espacio esta libre.
    const índice = this.hash(clave);
    if (this.tabla[índice] !== null && this.tabla[índice].clave === clave) {
    this.tabla[índice] = null;
    } else {
    let índiceActual = (índice + 1) % this.tamaño;
    while (this.tabla[índiceActual] !== null && this.tabla[índiceActual].clave !== clave) {
    índiceActual = (índiceActual + 1) % this.tamaño;
    }
    if (this.tabla[índiceActual] !== null && this.tabla[índiceActual].clave === clave) {
    this.tabla[índiceActual] = null;
    }
    }
    }
   //aqui imprime la lista actual con los productos agregados o borrados
    imprimir() {
    console.log("Productos:");
    for (let i = 0; i < this.tamaño; i++) {
    if (this.tabla[i] !== null) {
    console.log(`${this.tabla[i].clave}: ${this.tabla[i].valor}`);
    }
    }
    }
   }
   
   // Ejemplo de uso
   const almacén = new HashTable(5);
   
   almacén.agregar(1, "iPhone");
   almacén.agregar(2, "Samsung");
   almacén.agregar(3, "Sony");
   almacén.agregar(4, "Huawei");
   almacén.agregar(5, "xiaomi");
  


   
   almacén.imprimir();
   
   almacén.eliminar(2);
   almacén.imprimir();