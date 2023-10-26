var parrafo = document.querySelector('.cantidad');
var cuenta = Number(parrafo.innerHTML);

function sumar() {
    cuenta = cuenta + 1
    parrafo.innerHTML = cuenta
    mostrar()
}

function restar() {
    cuenta = cuenta - 1
    parrafo.innerHTML = cuenta
    mostrar()
}

function mostrar(){
    let resultado = document.querySelector('.valor-total')
    total = cuenta * 400000
    resultado.innerHTML = total.toLocaleString()
}