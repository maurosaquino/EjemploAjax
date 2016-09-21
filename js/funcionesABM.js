function BorrarCD(idParametro)
{
	//alert(idParametro);

	$.ajax({url:"nexo.php",type:"post",data:{queHacer:"BorrarCD",id:idParametro}})
	.then(function(exito){
		Mostrar("MostrarGrilla");
		$("#informe").html("cantidad de eliminados"+retorno);
	},function(error){
		$("#informe").html(retorno.responseText);
	});


}

function EditarCD(idParametro)
{

	$.ajax({url:"nexo.php",type:"post",data:{queHacer:"TraerCD",id:idParametro}})
	.then(function(exito){

		setTimeout(function(){
		var cd =JSON.parse(retorno);	
		$("#idCD").val(cd.id);
		$("#cantante").val(cd.cantante);
		$("#titulo").val(cd.titulo);
		$("#anio").val(cd.año);},2000);

		Mostrar("MostrarFormAlta");

	}, function(error){

		$("#informe").html(retorno.responseText);			
	});

}

function GuardarCD()
{
		var id=$("#idCD").val();
		var cantante=$("#cantante").val();
		var titulo=$("#titulo").val();
		var anio=$("#anio").val();

		$.ajax({url:"nexo.php",type:"post",data:{queHacer:"GuardarCD",
												 id:id,
												 cantante:cantante,
												 titulo:titulo,
												 anio:anio}})
		.then(function(exito){

			MostrarGrilla('MostrarGrilla');
			$("#informe").html("cantidad de agregados "+ retorno);	
		},function(error){

			$("#informe").html(retorno.responseText);
		});	
}