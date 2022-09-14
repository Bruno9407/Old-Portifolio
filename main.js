const titulo = document.querySelector('.nome')
const foto = document.querySelector(".eu")
const projetos = document.querySelector(".projetos")
const contato = document.querySelector(".contato")
const targets = [projetos, contato]
const animationClass = "anime"

function typeWriter(elemento){
    const texto = "Bruno Xavier"
    const textoArray = texto.split('')
    elemento.innerHTML = ''
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra
        }, 150 * i)
    });
}

setTimeout(()=>{
    typeWriter(titulo)
    if(window.innerWidth >= 1000){
        foto.classList.add("foto")
    }
    
}, 1000)


function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)
    targets.forEach((elemento)=>{
        if((windowTop) > elemento.offsetTop){
            elemento.classList.add(animationClass)
        } else{
            elemento.classList.remove(animationClass)
        }
    })
}

animeScroll();

if(targets.length){
    window.addEventListener('scroll', ()=>{
        animeScroll();
    })
}