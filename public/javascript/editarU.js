window.addEventListener('load', () => {

    let $ = (elemento) => document.querySelector(elemento)
    console.log("editar vinculado");

    document.getElementById("file").onchange=function(e){
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload=function(){
            let preview = document.getElementById("preview");
            imagen=document.createElement("img");
            imagen.src=reader.result;
            preview.append(imagen);

        }
    }
    file.addEventListener("change", (e)=>{
        iconUser.style.display = "none"
    })
})
