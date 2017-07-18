//Express es un servidor de Javascript
var express = require('express');
var path =require('path');
//Inicializa express como variable
var app = express();
//Genera una liga estática de los archivos que se indiquen para que el servidor los pueda encontrar
app.use('/static', express.static(path.join(__dirname,'node_modules')));
app.use('/static', express.static(path.join(__dirname,'/assets')));
app.use('/data', express.static(__dirname+'/data'));
//Get es un método http que obtiene de la raíz del documento una respuesta y un requerimiento. 
app.get('/', function(req,res){
	//Le envía el index al servidor 
	res.sendFile(__dirname+'/promesas.html');
});
//listen escucha el servidor en el puerto definido (1234)
app.listen(1234);