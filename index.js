// contador

const restar = document.getElementById("restar");
const sumar = document.getElementById("sumar");
const reset = document.getElementById("reset");
const contador = document.getElementById("contador");
let count = 0;

sumar.onclick = function(){
    count++;
    contador.textContent = count;
}

restar.onclick = function(){
    count--;
    contador.textContent = count;
}

reset.onclick = function(){
    count=0;
    contador.textContent = count;
}