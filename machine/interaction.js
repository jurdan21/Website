const splash = document.querySelector ('.intro');
document.addEventListener ('DOMContentLoaded', (e)=>{
    setTimeout (()=> {
        splash.classList.add('display-none');
    }, 1200);
})