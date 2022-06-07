<?php
	$servidor="localhost";
	$usuario="root";
	$clave="";
	$baseDeDatos="formulario";

	$enlace = mysqli_connect($servidor, $usuario, $clave, $baseDeDatos);

	if(!$enlace){
		echo"Error en la conexion con el servidor";
	}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
<Center><h3><strong><a class="link" href="index.html">The account was successfully created return to the main page.</a></strong></h3></Center>
</body>
</html>
<?php
	if(isset($_POST['registrarse'])){
		
		$Nombre =$_POST["nombre"];
		$Ingreso =$_POST["fecha"];
		$ID =$_POST["ma"];
		$correo=$_POST["correo"];

		$insertarDatos = "INSERT INTO datos VALUES('$Nombre',
													'$Ingreso',
													'$ID',
													'$correo')";

		$ejecutarInsertar = mysqli_query($enlace, $insertarDatos);

		if(!$ejecutarInsertar){
			echo"your account is already registered";
		}
	}
?>
