window.addEventListener("load", () => {
  let $ = (elemento) => document.querySelector(elemento)
  console.log("Register vinculado"); 

  let marca = $("#secMarc")

  const getMarca = async ( ) =>{
    try {
        let urlCategorias = 'http://localhost:4000/api/marcas'
        let response = await fetch(urlCategorias)
        let result = await response.json()
        console.log(result);
        cargarMarcas(result.data)
    } catch (error) {/* 
        console.log(error) */
    }  
  }

  const cargarMarcas = async (data) =>{

    
     marcas.forEach(marca => {  
      <li><a class="btn-neon" href="/productos/<%= marca.nombre %>">  marca.nombre  </a></li>
    }) 
            
            
}
getMarca()
})


