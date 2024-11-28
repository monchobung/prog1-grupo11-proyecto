
let urlParams = new URLSearchParams(window.location.search);
let tag = urlParams.get('tag');
let titulo = document.querySelector('.titulo');
let recetasTag = document.querySelector('.recetas');


titulo.textContent = `Recetas de ${tag}`;

function cargarRecetas() {
    fetch(`https://dummyjson.com/recipes/tag/${tag}`)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let recetas = data.recipes;
            let contenido = '';

      
            for (let i = 0; i < recetas.length; i++) {
                let receta = recetas[i];
                contenido += `<div class="receta">
                        <h2>${receta.name}</h2>
                        <img src="${receta.image}"/>
                       
                    </div>`;
            }

            recetasTag.innerHTML = contenido;
        })
        .catch(function (e) {
            console.error('Error al cargar las recetas:', e);
            recetasTag.innerHTML = `<p>Error al cargar las recetas.</p>`;
        });
}

cargarRecetas();
