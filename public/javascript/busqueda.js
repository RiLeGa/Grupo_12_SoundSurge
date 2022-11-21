/* window.onload = function() {

    let vinculacion = "Documento vinculado con exito"
    console.log(vinculacion);

    let $ = (e) => document.querySelector(e)

    let buscador = $("#search")
    let palabra = ""
    buscador.onkeydown = (e) => {
        let letra = e.key
        letra === "Backspace" ? palabra = palabra.substring(0, palabra.length -1) : letra.length > 1 ? null:
        palabra = palabra += letra
        console.log(event.key);
        console.log(palabra);
    }
} */

window.onload = function() {

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
}

