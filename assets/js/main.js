
    function getJSON(url) {
        return new Promise(function(resolve, reject) {
            var ajax = new XMLHttpRequest();
            //var url = "data/earth-like-results.json";
            ajax.open("GET", url);
            ajax.send();
            ajax.onreadystatechange = function(data) {
                if (ajax.readyState == 4) {
                    resolve(JSON.parse(ajax.responseText));
                };
            };
        });
    };
    
   getJSON("data/earth-like-results.json")
    .then(function(planetas){return(getJSON(planetas.results.forEach(function(planeta){
        getJSON(planeta).then(function(infoPlanetas){
            obtenerDatos(infoPlanetas);
            console.log(infoPlanetas.st_rad);
        })
    })))
});

function obtenerDatos(infoPlanetas){
    var nombre = "Nombre: " + infoPlanetas.pl_name;
    var descubrimiento = "Año de descubrimiento: " + infoPlanetas.pl_disc +" -- Rad: "+ infoPlanetas.st_rad;
    //var rad = "Rad: " + infoPlanetas.st_rad;
    mostrarPlaneta(nombre, descubrimiento);
}

function mostrarPlaneta(nombre, descubrimiento){
    var contenedor = document.getElementById("tarjeta-planeta");
    var divCard = document.createElement("div");
    divCard.className="card col s12 m6";
    var divCardImage = document.createElement("div");
    divCardImage.className="center-align";
    var imagen = document.createElement("img");
    imagen.src = "static/img/giphy.webp";
    var divCardContenido = document.createElement("div");
    var nombrePlaneta = document.createElement("h4");
    nombrePlaneta.className="center-align";
    nombrePlaneta.innerText = nombre;
    var descubrimientoPlaneta = document.createElement("h5");
    descubrimientoPlaneta.innerText = descubrimiento;
    descubrimientoPlaneta.className="center-align";
    var radPlaneta = document.createElement("h5");
    /*radPlaneta.innerText = rad;
    radPlaneta.document.createElement("h5");
    radPlaneta.className = "center-align"; */


    divCardImage.appendChild(imagen);
    divCard.appendChild(divCardImage);
    divCardContenido.appendChild(nombrePlaneta);
    divCardContenido.appendChild(descubrimientoPlaneta);
    //divCardContenido.appendChild(radPlaneta);
    divCard.appendChild(divCardContenido);

    contenedor.appendChild(divCard);
    
}

      