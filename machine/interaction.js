const splash = document.querySelector ('.loading-flower');

document.addEventListener ('DOMContentLoaded', (e)=>{
    setTimeout (()=> {
        splash.classList.add('display-none');
    }, 1000);
})