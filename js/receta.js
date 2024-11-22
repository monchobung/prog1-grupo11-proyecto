function getQueryParam(param) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

let ProductoId = getQueryParam('id');


if (ProductoId) {
    let url = `https://dummyjson.com/recipes/${ProductoId}`;

    fetch(url)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
           
            console.log(data);

            
         

            let fotoReceta = document.querySelector('.foto');
            let titulo = document.querySelector('.titulo')
            let informacionReceta = document.querySelector(`.instrucciones`)
            let tiempoCoccion = document.querySelector('.tiempoCoccion')
            let categoria = document.querySelector('.categoria')

          

            fotoReceta.src =data.image;
            titulo.textContent =data.name
            informacionReceta.textContent = data.instructions
            tiempoCoccion.textContent ='Tiempo Coccion: ' + data.cookTimeMinutes + ' minutos'
            categoria.textContent = 'Categoria: ' + data.tags

            for (let index = 0; index < data.tags.length; index++) {
                const tag = data.tags[index];
                // "<a href='./result-categ.?'"
            }
            




        })
        .catch(function(e) {
            console.log(e);
        });
} else {
    console.error('No hay un id en la URL');
}