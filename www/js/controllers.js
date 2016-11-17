angular.module('todoList.controllers', [])

.controller('ListaController', function($state, listaService) {

  this.listas = listaService.listas;

  this.agregarLista = function() {
    var lista = listaService.agregarLista(new Lista("", [new Item()]));
    $state.go('lista', {listaId: lista.id});
  }

  this.eliminarLista = function(lista) {
    listaService.eliminarLista(lista);
  }

  this.toggleImportante = function(lista) {
    lista.toggleImportante();
  }

})

.controller('ListaDetalleController', function($stateParams, listaService) {

  this.lista = listaService.getListaById($stateParams.listaId);

  this.eliminarItem = function(item) {
    this.lista.eliminarItem(item);
  };

  this.agregarItem = function() {
    this.lista.agregarItem(new Item())
  };

});
