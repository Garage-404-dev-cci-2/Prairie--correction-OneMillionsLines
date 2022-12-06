let btn = document.querySelector(".btn-back-top")

btn.addEventListener('click', function (){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})