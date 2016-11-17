todoListApp.service("listaService", function () {

    this.listas = [];

    this.agregarLista = function (lista) {
        lista.id = this.getUltimoId() + 1
        this.listas.push(lista);
        return lista;
    };

    this.getListaById = function (id) {
        return this.listas.find(function (lista) {
            return lista.id == id;
        })
    };

    this.getUltimoId = function() {
        if(this.listas.length == 0) { return 0; }

        var ids = this.listas.map(function(lista) {
           return lista.id;
        });

        return mayor(ids);
    };

    this.eliminarLista = function(lista) {
        var index = this.listas.indexOf(lista);
        if(index > -1) {
            this.listas.splice(index, 1);
        }
    }

    this.agregarLista(new Lista("Trabajo", [new Item("Programar"), new Item("Testear"), new Item("Deployar")]));
    this.agregarLista(new Lista("Facu", [new Item("Estudiar Redes"), new Item("Entrega Algo3"), new Item("Imprimir Apunte SO")]));
    this.agregarLista(new Lista("Compras", [new Item("Fideos"), new Item("Shampoo"), new Item("Yerba"), new Item("Sal")]));


});

function mayor(array) {
   return Math.max.apply(null, array)
}