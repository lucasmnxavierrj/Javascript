const hamburgerIcon = document.querySelector('.hamburger-icon')
const sidebar = document.querySelector('.sidebar')
const containerSidebar = document.querySelector('.container-sidebar')
const navItems = document.querySelectorAll('.nav-item')

//Exibe subitems
navItems.forEach(navItem =>{
    let subItems = navItem.querySelectorAll('.nav-subitem')
    if (subItems.length > 0){
        navItem.addEventListener('click',function(){            
            let arrow_direita = navItem.querySelector('.fa-angle-right')
            let arrow_baixo = navItem.querySelector('.fa-angle-down')
            subItems.forEach(subItem =>{
                if (getComputedStyle(subItem).getPropertyValue("display") == 'none'){
                    subItem.style.display = 'block'
                    arrow_direita.classList.remove('fa-angle-right')
                    arrow_direita.classList.add('fa-angle-down')
                }else{
                    subItem.style.display = 'none'
                    arrow_baixo.classList.remove('fa-angle-down')
                    arrow_baixo.classList.add('fa-angle-right')
                }
                
            })
        })
    }
})

//COLAPSE SIDEBAR
hamburgerIcon.addEventListener('click', () =>{
    if (sidebar.classList.contains('sidebar')){
        sidebar.classList.remove('sidebar')
        sidebar.classList.add('sidebar-colapsed')

        navItems.forEach(navItem=>{
            navItem.classList.remove('nav-item')
            navItem.classList.add('nav-item-colapsed')
        })

    } else{
        sidebar.classList.remove('sidebar-colapsed')
        sidebar.classList.add('sidebar')

        navItems.forEach(navItem =>{
            navItem.classList.remove('nav-item-colapsed')        
            navItem.classList.add('nav-item')        
        })
    }
})
//HOVER SIDEBAR
containerSidebar.addEventListener('mouseover', () =>{
    if (sidebar.classList.contains('sidebar-colapsed')){
        sidebar.classList.remove('sidebar-colapsed')
        sidebar.classList.add('sidebar-hover')
    
        navItems.forEach(navItem =>{
            navItem.classList.remove('nav-item-colapsed')        
            navItem.classList.add('nav-item')        
        })
    }
})
containerSidebar.addEventListener('mouseout', () =>{
    if (sidebar.classList.contains('sidebar-hover')){
        sidebar.classList.add('sidebar-colapsed')
        sidebar.classList.remove('sidebar-hover')
    
        navItems.forEach(navItem =>{
            navItem.classList.add('nav-item-colapsed')        
            navItem.classList.remove('nav-item')        
        })
    }
})