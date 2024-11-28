let url = new URLSearchParams(window.location.search);
let query = url.get("query");

let tituloBusqueda = document.querySelector('.titulo'); // Selecciona el <h2>
let listaResultados = document.querySelector('.recetas');

// Actualiza directamente el contenido del <h2>
tituloBusqueda.textContent = `Resultados de búsqueda para: ${query}`;

function cargarResultados() {
    fetch(`https://dummyjson.com/recipes/search?q=${query}`)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let recetas = data.recipes;

            if (recetas.length === 0) {
                listaResultados.innerHTML = `<p>No se encontraron resultados para: ${query}</p>`;
                return;
            }

            let contenidoRecetas = '';

            for (let i = 0; i < recetas.length; i++) {
                let receta = recetas[i];
                contenidoRecetas += `
                    <div class="receta">
                        <img src="${receta.image}" alt="${receta.name}" />
                        <h3>${receta.name}</h3>
                        <a href="receta.html?id=${receta.id}">Ver detalle</a>
                    </div>
                `;
            }
            listaResultados.innerHTML += contenidoRecetas;

        })
        .catch(function (e) {
            console.error('Error al cargar las recetas:', e);
        });
}

cargarResultados();
