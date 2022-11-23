
document.addEventListener("keyup", e=>{
    /* console.log(e.target.value); */
    if(e.target.matches("#inputSearch"))
    document.querySelectorAll("h3").forEach(producto =>{
        /* console.log(producto); */
        producto.textContent.toLowerCase().includes(e.target.value)
        ? producto.classList.remove(".filtro") : producto.classList.add(".filtro")
    })
})