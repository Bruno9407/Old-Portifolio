document.getElementsByClassName("cta").addEventListerner(Event => {
    Event.preventDefault();
    const content = document.getElementsByClassName("contratos");
    window.scroll({
        top: content,
        behavior: "smooth"
    });
})