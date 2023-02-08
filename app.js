const primaryDrop = document.querySelector('.nav-link');
const navMobile = document.querySelector('.mobile-nav-toggle');

navMobile.addEventListener('click', () =>{
    const visibility = primaryDrop.getAttribute('data-visible');{
        if(visibility === "false"){
            primaryDrop.setAttribute('data-visible', true);
            navMobile.setAttribute('aria-expanded', true);
        }else{
            primaryDrop.setAttribute('data-visible', false);
            navMobile.setAttribute('aria-expanded', false);
        }
    }
})
