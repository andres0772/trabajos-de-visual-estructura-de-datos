class Restaurante {
    constructor() {
        this.size = 10; 
        this.table = new Array(this.size);
    }

    hashFunction(mesa) {
        return mesa % this.size;
    }

    rehash() {
        let newSize = this.size * 2; 
        let newTable = new Array(newSize);

        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                for (let j = 0; j < this.table[i].length; j++) {
                    let mesa = this.table[i][j][0];
                    let index = mesa % newSize;
                    if (!newTable[index]) {
                        newTable[index] = [];
                    }
                    newTable[index].push([mesa, this.table[i][j][1]]);
                }
            }
        }

        this.size = newSize;
        this.table = newTable;
    }

    reservar(mesa, cliente) {
        let index = this.hashFunction(mesa);
        if (!this.table[index]) {
            this.table[index] = [];
        }

        // Verificar si la mesa ya está reservada
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === mesa) {
                console.log(`Mesa ${mesa} ya está reservada para ${this.table[index][i][1]}`);
                return;
            }
        }

        this.table[index].push([mesa, cliente]);
        console.log(`Mesa ${mesa} reservada para ${cliente}`);

        if (this.table.filter(Boolean).length >= this.size * 0.7) {
            this.rehash();
        }
    }

    buscar(mesa) {
        let index = this.hashFunction(mesa);
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === mesa) {
                    return this.table[index][i][1];
                }
            }
        }
        return "Mesa no reservada";
    }

    eliminarReserva(mesa) {
        let index = this.hashFunction(mesa);
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === mesa) {
                    this.table[index].splice(i, 1);
                    console.log(`Reserva de mesa ${mesa} eliminada`);
                    return;
                }
            }
            console.log(`Mesa ${mesa} no tiene reservas`);
        } else {
            console.log(`Mesa ${mesa} no existe`);
        }
    }

    mostrarReservas() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(`Índice ${i}:`);
                for (let j = 0; j < this.table[i].length; j++) {
                    const [mesa, cliente] = this.table[i][j];
                    console.log(`Mesa ${mesa}: reservada por el cliente ${cliente}`);
                }
            }
        }
    }
}


let restaurante = new Restaurante();

// Reservar mesas
restaurante.reservar(1, "Juan");
restaurante.reservar(2, "María");
restaurante.reservar(1, "Pedro"); 
restaurante.reservar(3, "Ana");
restaurante.reservar(4, "andres");

// Buscar reserva
console.log("---------------")
console.log(restaurante.buscar(5)); 

// Mostrar reservas
console.log("----------------------")
restaurante.mostrarReservas();

// Eliminar reserva
console.log("----------------------")
restaurante.eliminarReserva(1);
restaurante.eliminarReserva(1);

// Mostrar reservas después de eliminar
console.log("----------------------")
restaurante.mostrarReservas();