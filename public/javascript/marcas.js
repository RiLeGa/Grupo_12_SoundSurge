window.addEventListener("load", () => {
  let $ = (elemento) => document.querySelector(elemento)
  console.log("Register vinculado"); 
  

  let todos = $('.indice .category_item[category="all"]')
    if (todos.classList.contains("category_item")) {
        todos.classList.remove("category_item");
        todos.classList.add("category_tuneado");
    }
  
  let epiphone = $('.indice .category_item[category="Epiphone"]')
  
  epiphone.addEventListener("click", () => {
    
  })


  
   

  
 

});
