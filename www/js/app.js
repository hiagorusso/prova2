$(document).ready( function() {
	$.ajax({
		type: 'GET',
		url: 'http://swapi.co/api/people/',
		dataType: 'json',
		data: { get_param: 'value' },
		error: function (erro) {
			alert(erro.responseText);
		},
		success: function(data) {
			var divPersonagem = document.querySelector("#divPerson");
			divPersonagem.innerHTML = "";
			$.each(data.results, function(i, obj) {
				divPersonagem.innerHTML += '<a href="javascript:listarPersonagem(\'' + obj.url + '\')" >' + obj.name + '</a> <br />';
			})
		}
	})
})

function listarPersonagem(urlPersonagem) {
	$.ajax({
		type: 'GET',
		url: urlPersonagem,
		dataType:'json',
		data: { get_param: 'value' },
		error: function(erro) {
			alert(erro.responseText);
		},
		success: function(data) {
			var divPersonagem = document.querySelector("#divInfo");
			divPersonagem.innerHTML = "";
			divPersonagem.innerHTML += "Nome: " + data.name + 
		    "<br/>Altura:" + data.height + 
			"<br/>Peso: " + data.mass +
			"<br/>Cor do cabelo: " + data.hair_color+
			"<br/>Cor da pele: " + data.skin_color+
			"<br/>Cor do olho: " + data.eye_color + 
			"<br/>Nascimento: " + data.birth_year +
			"<br/>Genero: " + data.gender + 
						
			
			"<br/>";
	}});
}






