document.querySelectorAll(".cta").forEach(cta => cta.addEventListener('click', event => {
    console.log("click")
    event.preventDefault();
    const conteudo = document.querySelector("#contrato").offsetTop
    window.scroll({
        top: conteudo,
        behavior: "smooth"
    })
}))