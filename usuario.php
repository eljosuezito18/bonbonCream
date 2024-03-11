<?php
// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "josue2432";
$dbname = "bonbonclan";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
  die("Error de conexión: " . $conn->connect_error);
}

// Recibir datos del formulario
$usuario = $_POST['usuario'];
$contrasenna = $_POST['contrasenna'];

// Insertar datos en la base de datos
$sql = "INSERT INTO usuarios (usuario, contrasenna) VALUES ('$usuario', '$contrasenna')";

if ($conn->query($sql) === TRUE) {
  echo "Usuario registrado correctamente";
} else {
  echo "Error al registrar el usuario: " . $conn->error;
}

// Cerrar conexión
$conn->close();
?>