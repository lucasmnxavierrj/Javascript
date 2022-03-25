let botaoAbrirSidebar = document.querySelector('.hamburger-menu')
let botaoFecharSidebar = document.querySelector('#fechar-sidebar')
let sidebar = document.querySelector('header')

function interacoesSidebar(){
    if (this.classList.contains('hamburger-menu')){
        sidebar.classList.remove('hide')
        sidebar.style.animation ='slideInRight 1s ease-in-out'
    }else{
        sidebar.classList.add('hide')
    }
}


botaoAbrirSidebar.addEventListener('click', interacoesSidebar)
botaoFecharSidebar.addEventListener('click', interacoesSidebar)
