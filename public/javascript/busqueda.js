window.addEventListener('load', () => {

    let $ = (elemento) => document.querySelector(elemento)
    console.log("buscador vinculado");

document.addEventListener("keyup", e=>{
    console.log(e.target.value);
    if(e.target.matches("#inputSearch"))
    document.querySelectorAll(".producto-buscador").forEach(producto =>{
        producto.textContent.toLowerCase().includes(e.target.value)
        ? producto.classList.remove('filtro') 
        : producto.classList.add('filtro')
    })

})
})