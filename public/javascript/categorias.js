window.addEventListener("load", () => {

    /* let $ = (elemento) => document.querySelector(elemento) */
    console.log("Categorias vinculado");

    /* const app = document.getElementById("root");
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    app.appendChild(container); */

    const cat = document.querySelector("#secCat")


    const getCategorias = async ( ) =>{
        try {
            let urlCategorias = 'http://localhost:4000/api/categorias'
            let response = await fetch(urlCategorias)
            let result = await response.json()
            console.log(result);
            cargarCategorias(result.data)
        } catch (error) {/* 
            console.log(error) */
        }  
      }

      const cargarCategorias = async (data) =>{

        
            
                
                
    }
    getCategorias()
})