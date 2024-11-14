class Nodo { //se crea una clase llamada nodo
    constructor(dato) { //esta clase tendra dos propiedades
    this.dato = dato; //dato permitira almacenar la informacion que se ponga
    this.siguiente = null; // y siguiente que hara referencia al nodo siguiente
    }
   }
   
   class ListaEnlazada { //se crea otra clase llamada lista enlazada que tendra una propiedad
    constructor() {
    this.cabeza = null; //cabeza hace referencia al primer nodo que es class nodo
    }
   
    agregar(dato) { 
        const nodo = new Nodo(dato); //se crea otro nodo que permitira agregar un dato
        nodo.siguiente = this.cabeza; //permite crear el nodo con el anterior
        this.cabeza = nodo; //ACTUALIZA EL NODO ACTUAL
        }
       
        agregarFinal(dato) { //se crea un nodo que permite poner un dato en la posicion final de la lista
        if (!this.cabeza) { //verifica que la lista este vacia con un condicional, si la lista esta vacia inicializa un puntero.
        this.cabeza = new Nodo(dato);
        } else {
        let actual = this.cabeza; //inicia el puntero 
        while (actual.siguiente) { //hace el recorrido de la lista
        actual = actual.siguiente; //pasa la siguiente lista 
        }
        actual.siguiente = new Nodo(dato); //pasa al siguiente nodo
        }
        }
       
        eliminar(dato) { //se crea una funcion para eliminar un dato
        if (this.cabeza.dato === dato) { //se crea una condicion donde verifique el nodo inicial que es class nodo
        this.cabeza = this.cabeza.siguiente;
        } else {
        let actual = this.cabeza; // esto permite que el valor que queramos borrar lo ubique, ya sea en la parte inicial o la parte final
        while (actual.siguiente) { // por eso hace un recorrido de la lista
        if (actual.siguiente.dato === dato) {
        actual.siguiente = actual.siguiente.siguiente; //una ves ubicado elimina el dato y imprime la lista actual
        return;
        }
        actual = actual.siguiente;
        }
        }
        }
       
            imprimir() { //aqui se crea la parte de imprimacion de los valores agregas en la posicion final o incial y valores borrados.
                let actual = this.cabeza;
                let resultado = "";
                while (actual) {
                resultado += actual.dato + " → ";
                actual = actual.siguiente;
                }
                console.log(resultado + "null");
               }
        }

       
       // Ejemplo
       const lista = new ListaEnlazada();
       lista.agregar(1);
       lista.agregar(2);
       lista.agregar(3);
       lista.agregar(4);
       lista.agregarFinal(5);
       lista.imprimir();
       console.log("--------------");
       lista.eliminar(4);

       lista.imprimir();
       
    