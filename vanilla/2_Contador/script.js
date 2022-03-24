let botaoMenos = document.querySelector('#btn-menos')
let botaoMais = document.querySelector('#btn-mais')
let botaoReset = document.querySelector('#btn-reset')
let valorContador = document.querySelector('.contador')

botaoMenos.addEventListener('click',contador)
botaoMais.addEventListener('click',contador)
botaoReset.addEventListener('click',contador)

function contador() {
    if (this.id == 'btn-mais'){
        valorContador.textContent = Number(valorContador.textContent) + 1
    } else if (this.id == 'btn-menos'){
        valorContador.textContent = Number(valorContador.textContent) - 1
    } else {
        valorContador.textContent = 0
    }
    if (Number(valorContador.textContent) > 0){
        valorContador.style.color = 'green'
    }else if(Number(valorContador.textContent) < 0){
        valorContador.style.color = 'red'
    } else{
        valorContador.style.color = '#1e1e1e';
    }
}