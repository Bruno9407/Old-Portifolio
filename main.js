//Type writer

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

const titulo = document.querySelector('.nome');



const foto = document.querySelector(".eu")
setTimeout(()=>{
    typeWriter(titulo)
    if(window.innerWidth >= 1000){
        foto.classList.add("foto")
    }
    
}, 1000)


