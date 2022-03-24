let botao = document.querySelector('#btn-muda-background')
let nome_cor = document.querySelector('#nome-cor')


botao.addEventListener('click',mudaBackground)

function mudaBackground(){
    let cor = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6,0)
    document.body.style.backgroundColor = cor
    nome_cor.textContent = cor
    nome_cor.style.color = cor
}
