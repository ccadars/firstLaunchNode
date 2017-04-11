var express = require('express');
var appli = express();

appli.get(
	'/',
	function(request,response){
		response.sendFile(__dirname + '/views/index.html');
	}
);

appli.get(
	'/user',
	function(request,response){
		var retour = {
			nom : "cadars",
			prenom : "clement"
		};
		response.json(retour);
});

appli.listen(12107, function(){
	console.log("Pour péter dans la doc il faut de l'Heroku");
});
