let card = document.querySelectorAll('.card')
let txtCard = document.querySelector('.texto-card')

card.forEach(card =>{
    //console.log(botao.parentElement.parentElement.childNodes[3].classList.contains('hide')) 
    const botao = card.querySelector('.expandir-card')
    const conteudoCard = card.querySelector('.texto-card')

    botao.addEventListener('click',()=>{
        if(conteudoCard.classList.contains('hide')){
            conteudoCard.classList.remove('hide')
            conteudoCard.style.animation = 'fadeIn 1s 1'
            conteudoCard.style.opacity = '1'
        }else{
            conteudoCard.classList.add('hide')
        }
    })
    console.log(botao, conteudoCard)
})
