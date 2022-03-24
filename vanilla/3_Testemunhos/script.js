//Interações
let slideEsquerda = document.querySelector('.slide-esquerda')
let slideDireita = document.querySelector('.slide-direita')
let btnRandom = document.querySelector('.btn-random')
//Mudança de conteudo
let nomeTestemunho = document.querySelector('.nome-testemunho')
let ocupacaoTestemunho = document.querySelector('.ocupacao-testemunho')
let textoTestemunho = document.querySelector('.texto-testemunho')
let fotoTestemunho = document.querySelector('.foto-testemunho')
//Conteudo testemunhos
let conteudoTestemunhos = [
    {
        'foto':'static/pessoa1.png',
        'nome':'Eduarda Souza',
        'ocupacao':'Analista de RH da Nome Empresa',
        'testemunho':'Toffee gummi bears donut soufflé chocolate cake dragée. Carrot cake wafer cheesecake dragée jujubes powder. Tart lollipop chupa chups candy topping. Toffee tootsie roll toffee cupcake jelly donut. Toffee gummies sugar plum icing marshmallow chocolate cake.'        
    },
    {
        'foto':'static/pessoa2.png',
        'nome':'Rogério Gustavo',
        'ocupacao':'Product Owner da Nome Empresa',
        'testemunho':'Dragée bear claw pastry carrot cake sesame snaps soufflé sweet dessert ice cream. Candy canes cake lollipop marshmallow cheesecake soufflé. Wafer oat cake sugar plum danish candy canes cheesecake macaroon. '
    },
    {
        'foto':'static/pessoa3.png',
        'nome':'Fernanda Silva',
        'ocupacao':'Fundadora da Nome Empresa',
        'testemunho':'Candy croissant soufflé croissant pastry pie. Cookie tart chocolate cake carrot cake caramels. Toffee donut gummies bear claw cotton candy candy canes tootsie roll marzipan chocolate. Chupa chups carrot cake marzipan icing croissant jelly beans cotton candy.'
    },
    {
        'foto':'static/pessoa4.png',
        'nome':'Brian Azevedo',
        'ocupacao':'Gerente contábil da Nome Empresa',
        'testemunho':'Caramels lemon drops donut pie gummi bears lemon drops muffin toffee jelly. Topping donut sweet roll cheesecake bear claw. Sesame snaps dessert lemon drops cookie cake sugar plum sweet roll dessert chocolate cake.'
    },
    {
        'foto':'static/pessoa5.png',
        'nome':'Marta Rodrigues',
        'ocupacao':'CEO da Nome Empresa',
        'testemunho':'Cake sugar plum fruitcake tart fruitcake biscuit. Liquorice wafer soufflé bonbon sweet. Wafer chocolate bar candy canes donut dessert cupcake. Tart macaroon chocolate cake chocolate jelly beans. Chocolate ice cream lemon drops jelly dragée jelly beans oat cake caramels biscuit.'
    }
]
let pos = 0

function passarSlide(){
    switch (this.className){
        case 'slide-esquerda':
            pos--
            if (pos < 0){
                pos = 4
            }
        break
        case 'slide-direita':
            pos++
            if (pos > conteudoTestemunhos.length - 1){
                pos = 0
            }
        break
        case 'btn-random':
            pos = Math.floor(Math.random() * 5)
        break
    }
    fotoTestemunho.src = conteudoTestemunhos[pos]['foto']
    nomeTestemunho.textContent = conteudoTestemunhos[pos]['nome']
    ocupacaoTestemunho.textContent = conteudoTestemunhos[pos]['ocupacao']
    textoTestemunho.textContent = conteudoTestemunhos[pos]['testemunho']    
}
window.onload = passarSlide
slideEsquerda.addEventListener('click', passarSlide)
slideDireita.addEventListener('click', passarSlide)
btnRandom.addEventListener('click', passarSlide)
document.addEventListener('load', passarSlide)