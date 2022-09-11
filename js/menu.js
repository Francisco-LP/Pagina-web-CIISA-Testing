(function(){
    const openButton = document.querySelector('.nav_menu');  /*obtiene el elemento menu */
    const menu = document.querySelector('.nav_link');           
    const closeMenu = document.querySelector('.nav_close');     /* obtiene el elemento cerrar */

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav_link--show');           /*agrega la clase nav_link--show */
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav_link--show');            /*cierra el menu y remueve la clase nav_link--show*/
    });

    


})();