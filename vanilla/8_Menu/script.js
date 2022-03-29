let conteudo = [
    {
        'titulo':'Gummi bears cookie marzipan jelly pastry',
        'conteudo':'Pastry pastry sweet roll sugar plum jelly-o I love cotton candy soufflé sweet. Pastry lemon drops I love tart I love tootsie roll gummies pie. Marshmallow sugar plum gummies sesame snaps gummi bears.',
        'imagem':'static/img1.jpg',
        'categoria':'americaSul'
    },
    {
        'titulo':'Chocolate bar powder marzipan biscuit sweet roll gummi bears liquorice apple pie pie',
        'conteudo':'Jelly-o cake jujubes chupa chups I love. Jelly sweet roll shortbread icing halvah. Tiramisu I love powder I love ice cream cotton candy I love sweet soufflé.',
        'imagem':'static/img2.jpg',
        'categoria':'americaNorte'
    },
    {
        'titulo':'Carrot cake sugar plum pudding jelly-o I love jelly-o tootsie roll',
        'conteudo':'Pie I love macaroon toffee I love gummi bears apple pie caramels. I love cheesecake gummies fruitcake bonbon lemon drops jelly oat cake. Lemon drops lemon drops icing wafer donut I love I love liquorice.',
        'imagem':'static/img3.jpg',
        'categoria':'europa'
    },
    {
        'titulo':'Chocolate cake jelly dragée danish gummies pudding jelly beans bear claw',
        'conteudo':'Candy jelly-o topping caramels powder. Oat cake donut pie jelly-o chocolate bar. Pastry I love sesame snaps sweet roll I love I love fruitcake. Halvah lemon drops jelly beans icing bear claw icing topping.',
        'imagem':'static/img4.jpg',
        'categoria':'americaNorte'
    },
    {
        'titulo':'Soufflé liquorice I love macaroon jelly beans macaroon',
        'conteudo':'Cotton candy apple pie chocolate cake dragée marzipan brownie. I love icing muffin I love I love candy ice cream sugar plum chocolate cake. Cotton candy I love apple pie pie cotton candy marshmallow bear claw. Toffee I love I love danish muffin I love. Cookie macaroon halvah soufflé cake.',
        'imagem':'static/img5.jpg',
        'categoria':'asia'
    },
    {
        'titulo':'Biscuit danish wafer donut sesame snaps apple pie fruitcake',
        'conteudo':'I love powder dessert croissant soufflé I love jelly oat cake. Jelly beans carrot cake pudding fruitcake topping gummies oat cake. I love gummi bears icing gummies macaroon tiramisu.',
        'imagem':'static/img6.jpg',
        'categoria':'africa'
    },
]
let botoes = document.querySelectorAll('.btn-menu')

//no carregamento da pagina
window.addEventListener('DOMContentLoaded',exibirCards(conteudo))

//para cada botao de menu, será criado um array filtrando as categorias
botoes.forEach(botao =>{
    
    botao.addEventListener('click', ()=>{
        //console.log(botao.value)
        const atualizaCoresBotoes = ()=>{
            botoes.forEach(botao=>{
                botao.style.backgroundColor = 'orangered'
                console.log(botao)
            })
        }
        atualizaCoresBotoes()
        if(botao.value != 'todos'){
            let conteudoFiltrado = conteudo.filter(item=>item.categoria === botao.value)
            botao.style.backgroundColor = 'orange'
            exibirCards(conteudoFiltrado)
        }else{
            botao.style.backgroundColor = 'orange'
            exibirCards(conteudo)
        }
    })
})

//exibe cards baseado no objeto fornecido no parametro
function exibirCards(items){
    let htmlCards = items.map(item =>{
        return `<div class="card">
                    <div class="card-img">
                        <img src="${item['imagem']}" alt="">
                    </div>
                    <div class="card-conteudo">
                        <h3>${item['titulo']}</h3>
                        <p>${item['conteudo']}</p>
                    </div>
                </div>`
    })
    const divConteudo = document.querySelector('.conteudo')
    divConteudo.innerHTML = htmlCards.join('')
    //animacao de fadein sempre que os cards forem carregados
    let cards = document.querySelectorAll('.card')
    cards.forEach(card =>{
        card.style.display = 'flex'
        card.style.animation = 'fadeIn 1s ease-in-out'
    })
}




// })
// botoes.forEach(botao =>{
//     botao.addEventListener('click', function(){
//         botao.filter
//     })
// })