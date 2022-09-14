const titulo = document.querySelector('.nome')
const foto = document.querySelector(".eu")

const targets = document.querySelectorAll(".content-anime")
const animationClass = "anime"

const menuItens = document.querySelectorAll('.menu-top a[href^="#"]')

/*type writer e animação de entrada */

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

/*Animação do scroll*/

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

/*Suavizar links internos*/ 

menuItens.forEach((item) => {
    item.addEventListener('click',(event) => {
        event.preventDefault()
        const element = event.target
        const id = element.getAttribute('href')
        const conteudo = document.querySelector(id).offsetTop
        window.scroll({
            top: conteudo,
            behavior: "smooth"
        })
    })
})