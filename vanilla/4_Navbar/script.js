let hamburgerMenu = document.querySelector('.hamburger-menu')
let navMobile = document.querySelector('.nav-mobile')
let textoOrientacao = document.querySelector('.container p')
console.log(textoOrientacao)


function abrirFecharMenuMobile(){
    if (navMobile.classList.contains('hide')){
        navMobile.classList.remove('hide')
        hamburgerMenu.style.transform = 'rotate(35deg)'
    }else{
        navMobile.classList.add('hide')
        hamburgerMenu.style.transform = 'rotate(0deg)'
    }
    console.log(navMobile)
}


hamburgerMenu.addEventListener('click', abrirFecharMenuMobile)
addEventListener('resize', f = () =>{
    if (window.innerWidth < 500){
        textoOrientacao.innerHTML = '<p>Clique no menu Hamburguer!<b style="color:orange;font-size:1.5em"> :)</b></p>'
    }else{
        textoOrientacao.innerHTML = '<p>Diminua a largura da tela!<b style="color:orange;font-size:1.5em"> :)</b></p>'
    }
})