
function MostrarError()
{

	$.ajax({url:"nexoNoExiste.php"})
	.then(function(exito){

		$("#principal").html(exito);
		$("#informe").html("Correcto!!!");
	},function(error){

		$("#principal").html("error :(");
		$("#informe").html(error.responseText);
	});

}

function MostrarSinParametros()
{
	$.ajax({url:"nexoTexto.php"})
	.then(function(exito){

		$("#principal").html(exito);
		$("#informe").html("Correcto!!!");
	},function(error){

		$("#principal").html(":(");
		$("#informe").html(error.responseText);		
	});
}

function Mostrar(queMostrar)
{
		//alert(queMostrar);
	$.ajax({url:"nexo.php", type:"post",data:{queHacer:queMostrar}})
	.then(function(exito){

		$("#principal").html(exito);
		$("#informe").html("Correcto!!!");
	},function(error){

		$("#principal").html(":(");
		$("#informe").html(error.responseText);
	});

}

function MostarLogin()
{
		//alert(queMostrar);

	$.ajax({url:"nexo.php",type:"post",data:{queHacer:"MostrarLogin"}})
	.then(function(exito){

		$("#principal").html(exito);
		$("#informe").html("Correcto Form login!!!");
	},function(error){

		$("#botonesABM").html(":(");
		$("#informe").html(retorno.responseText);
	});

}