var express = require('express');
var appli = express();

appli.get(
	'/',
	function(request,response){
		response.send('Hello world');
	}
);

appli.listen(12107, function(){
	console.log("Pour péter dans la doc il faut de l'Heroku");
});
