window.addEventListener("load", () => {
  let $ = (elemento) => document.querySelector(elemento)
  console.log("Register vinculado"); 

  

  
  
  let epiphone = $('.indice .category_item[category="Epiphone"]')
  let muestra = $('.muestra .prueba[category=" all Yamaha"]')
    epiphone.addEventListener("click", (e) => {
    epiphone.style.backgroundColor = "red"
    if(e=muestra){
      muestra.style.display = "none"
    }
  })

  let todos = $('.indice .category_item[category="all"]')
    if (todos.classList.contains("category_item")) {
        todos.classList.remove("category_item");
        todos.classList.add("category_tuneado");
    }
    todos.addEventListener("click", () => {
        muestra.style.display = "block"
    })

});
