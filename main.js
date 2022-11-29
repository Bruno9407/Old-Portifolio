const titulo = document.querySelector('.nome')
const foto = document.querySelector(".eu")

const targets = document.querySelectorAll(".content-anime")
const animationClass = "anime"

const menuItens = document.querySelectorAll('.menu-top a[href^="#"]')

const btnmobile = document.querySelector(".menu-btn")
const nav = document.getElementById("nav");

const techs = document.querySelectorAll(".tech")
const descArea = document.querySelector(".descricao-tech")

const descricoes = {
    html: "HTML é uma linguagem de marcação de texto, estudo essa tecnologia a 3 anos e é a base para criação de paginas web.",

    css: "CSS é uma linguagem de estilização que estudo a 3 anos, no inico tinha bastante dificuldade para fazer oque eu queria, porém depois que aprendi o flexbox e o grid foi só alegria.",

    js: "JavaScript é uma linguagem de programação do navegador, já estudo essa linguagem a 2 anos e atualmente é a que mais estudo por causa do seu potencial de ser usada tando no front-end como no back-end com NodeJS.",

    react: "React é um framework para criação de interface de usuário, estudo essa tecnologia à um pouco mais de 1 ano.",

    node: "Node é um interpretador de Javascript para que possa ser usado fora do navegador, estudo Node por a menos de 1 ano, estudo para usar no back-end de aplicações web junto com Express e MySQL.",

    python: "Python foi a primeira linguagem de programação que aprendi quando tinha 13 anos, desde então aprendi a fazer automação de processos e analize de dados, ainda estudo sobre ciência de dados e Machine Learning."
}

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
        nav.classList.remove("active")
    })
})

/*Mostra descrição tecnologias*/

function mostraDescricao(event){
    const element = event.currentTarget
    const tech = element.getAttribute("id")
    descArea.innerHTML = descricoes[tech]
}

techs.forEach((item) =>{ 
    item.addEventListener("click", mostraDescricao)
})

/*Botão Mobile*/

function toggleMenu() {
    nav.classList.toggle("active");
}

btnmobile.addEventListener('click', toggleMenu);