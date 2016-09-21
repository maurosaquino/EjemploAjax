function validarLogin()
{
		var varUsuario=$("#correo").val();
		var varClave=$("#clave").val();
		var recordar=$("#recordarme").is(':checked');
		
$("#informe").html("<img src='imagenes/ajax-loader.gif' style='width: 30px;'/>");
	
	$.ajax({url:"php/validarUsuario.php",type:"post",data:{
															recordarme:recordar,
															usuario:varUsuario,
															clave:varClave
															}
	})
	.then(function(exito){

		if(retorno!="No-esta"){	
				MostarBotones();
				MostarLogin();

				$("#BotonLogin").html("Ir a salir<br>-Sesión-");
				$("#BotonLogin").addClass("btn btn-danger");				
				$("#usuario").val("usuario: "+exito);
			}else
			{
				$("#informe").html("usuario o clave incorrecta");	
				$("#formLogin").addClass("animated bounceInLeft");
			}

	},function(error){

		$("#botonesABM").html(":(");
		$("#informe").html(error.responseText);
	});
}


function deslogear()
{	
	$.ajax({url:"php/deslogearUsuario.php",type:"post"})
	.then(function(exito){

			MostarBotones();
			MostarLogin();
			$("#usuario").val("Sin usuario.");
			$("#BotonLogin").html("Login<br>-Sesión-");
			$("#BotonLogin").removeClass("btn-danger");
			$("#BotonLogin").addClass("btn-primary");
	},function(error){

			console.log(error);
	});	
}


function MostarBotones()
{		

	//alert(queMostrar);
	$.ajax({url:"nexo.php",type:"post",data:{queHacer:"MostrarBotones"}})
	.then(function(exito){

		$("#botonesABM").html(retorno);
	},function(error){

		console.log(error);
	});

	
}
