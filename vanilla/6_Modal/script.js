let btnAbreModal = document.querySelector('#btn-abrir-modal')
let btnFechaModal = document.querySelector('#fechar-modal')
let overlay = document.querySelector('.overlay')
let cardModal = document.querySelector('.container-modal')

btnAbreModal.addEventListener('click', ()=>{
    overlay.style.display = 'block'
    overlay.style.animation = 'fadeIn 2s'
    overlay.style.opacity = '1'
    
    cardModal.style.display = 'flex'
    cardModal.style.animation = 'fadeIn 2s'
    cardModal.style.opacity = '1'

})
btnFechaModal.addEventListener('click', () =>{
    overlay.style.display = 'none'
    cardModal.style.display = 'none'
})