/* window.addEventListener("load", () => { */
  let $ = (elemento) => document.querySelector(elemento)
  console.log("Register vinculado"); 

  let marca = $("#secMarc")

  const getMarca = async ( ) =>{
    try {
        let urlCategorias = 'http://localhost:4000/api/marca'
        let response = await fetch(urlCategorias)
        let result = await response.json()
        console.log(result);
        cargarMarcas(result.data)
    } catch (error) {/* 
        console.log(error) */
    }  
  }

  const cargarMarcas = async (data) =>{
    marca.innerHTML = ""
    
    data.forEach(elemento => { 
      let item = ` 
      <li><a class="btn-neon" href="/productos/${elemento.nombre}"> ${elemento.nombre}  </a></li>`

      marca.innerHTML += item
   })    
            
}

marca&&getMarca()

/* getMarca() */
/* }) */


