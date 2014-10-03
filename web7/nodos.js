//--------Creando nodos ---------------
var addLista = function () { // ------------Creamos funcion

    var item = document.createElement("li"); // -------- Se añade al contenido
    var texto = document.createTextNode("me han creado nuevo"); //  ---------- Lo que va dentro del contenido

    item.appendChild(texto); //  ----- Crea el hijo

    document.getElementById("hijo1").appendChild(item); //  --------- añade el hijo creado a hijo1


};

var borrarNono = function (id) {

    var nodo = document.getElementById(id); // --------- recoje el id que le demos en la funcion
    var padre = nodo.parentNode;  // - --------- borra el nodo al estar en blanco

    padre.removeChild(nodo); //  -------- aqui lo aplica
};

var cambiarColor = function (id) {

    var nodo = document.getElementById(id);
    nodo.className = "rosita"; //  --- recoge la clase css para aplicarla
}

var todos = function () {

    var p = document.getElementById("padre");

    while (p.childNodes.length > 0) {
        p.removeChild(p.childNodes[0]);
    }
    //for (var i = 0; i < p.childNodes.length; i++) {
    //    p.removeChild(p.childNodes[0]);
    //}
}