var Item = function (descripcion) {
    this.descripcion = descripcion || '';
    this.hecho = false;
};

var Lista = function (titulo, items) {
    this.titulo = titulo || '';
    this.items = items || [];
    this.importante = false;
}

Lista.prototype.estaPendiente = function() {
    return this.estaVacia() || this.items.every(function (item) {
        return !item.hecho
    });
}

Lista.prototype.estaEnProgreso = function() {
    return !this.estaCompleta() && !this.estaPendiente();
}

Lista.prototype.estaVacia = function() {
    return this.items.length == 0
}

Lista.prototype.estaCompleta = function() {
    return !this.estaVacia() && this.items.every(function (item) {
        return item.hecho
    });
}

Lista.prototype.agregarItem = function(item) {
    this.items.push(item);
}

Lista.prototype.eliminarItem = function(item) {
    var index = this.items.indexOf(item);
    if(index > -1) {
        this.items.splice(index, 1);
    }
}

Lista.prototype.getEstado = function() {

    if(this.estaCompleta()) {
        return "Completa";
    }

    if(this.estaEnProgreso()) {
        return "En Progreso";
    }

    if(this.estaPendiente()) {
        return "Pendiente";
    }

}

Lista.prototype.toggleImportante = function() {
    this.importante = !this.importante
}
