window.addEventListener("load", function(){

    let $ = (elemento) => document.querySelector(elemento)
    console.log("ubicacion vinculada");

    let ubi1 = $('#ubi1')
    let ubi2 = $('#ubi2')

    ubi1.addEventListener("click", (e)=>{
        document.querySelector('#mapa').innerHTML= '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d52476.25863636203!2d-58.4572788!3d-34.7110774!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a332d51c935575%3A0xdf50d90346647fa8!2sUnder%20Music!5e0!3m2!1ses-419!2sar!4v1671381505205!5m2!1ses-419!2sar" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    })

    ubi2.addEventListener("click", (e)=>{
        document.querySelector('#mapa').innerHTML= '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.45534151131!2d-58.71488824942152!3d-34.54202478037978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbd129cb9d84b%3A0x6759403edf94803f!2sLa%20P%C3%BAa.%20Instrumentos%20Musicales%2C%20audio%20e%20iluminaci%C3%B3n.!5e0!3m2!1ses-419!2sar!4v1658858434892!5m2!1ses-419!2sar" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    })
})