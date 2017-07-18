    // JSON para obtener información de una api con url local
    function getJSON(url) {

        //Se Retorna una promesa mediante new Promise, (los parametros corresponden a los estados de promesa que son resolver y rechazar) 
        return new Promise(function(resolve, reject) {
            var ajax = new XMLHttpRequest();
           
            ajax.open("GET", url);
            ajax.send();

            //El método onreadystatechange, detecta cambios en el estado.
            ajax.onreadystatechange = function(data) {
                //readystate tiene parámetros del 0 al 4, 4 significa que el requerimiento fue cargado y se obtuvo una respuesta.
                if (ajax.readyState == 4) { 
                    resolve(JSON.parse(ajax.responseText));
                };
            };
        });
    };
    //A la función getJSON se le otorga el parámetro de url
   getJSON("data/earth-like-results.json")
   //.then funciona cuando la promesa se cumplió y necesita un parámetro que devuelva una nueva promesa a través del return.
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

      