

window.addEventListener('load', () => {

    let vinculacion = 'Documento vinculado con exito'
    console.log(vinculacion);
    
    let $ = (elemento) => document.querySelector(elemento)
    let selectorAll = (elemento) => document.querySelectorAll(elemento)

    let buscador = $('#inputSearch')
    let botones = selectorAll('.botonRedireccion')
    let palabra = ""
    buscador.onkeydown = (event) => {
        let letra = event.key
        letra === 'Backspace' ? palabra = palabra.substring(0, palabra.length - 1) : letra.length > 1 ? null : palabra = palabra += letra
        if (palabra === 'gibson') {
            botones.forEach(element => {
                element.style.backgroundColor = 'var(--colorFondo)'
            });
        }
    }
    
})


/* window.onload = function() {

    let vinculacion = "Documento vinculado con exito"
    console.log(vinculacion);

document.getElementById("inputSearch").addEventListener("keyup", buscador)

function buscador(){
    filter = inputSearch.value.toUperCase();
    li = box_search.getElementByIdTagName("li")

    for(i = 0; i < li.length; i++){
        
        a = li[i].getElementByIdTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUperCase().indexOf(filter) > -1){
            li[i].style.display = "";
            box_search.style.display = "block";

            if(search.value === ""){
                box_search.style.display = "none";
            }

        }else{
            li[i].style.display = "none";
        }    
    }
    
}
} */

