document.getElementById('login-form').addEventListener('submit', function(event) {
    // Evitar que el formulario se envíe automáticamente
    event.preventDefault();

    // Obtener los valores de usuario y contraseña ingresados por el usuario
    var username = document.querySelector('input[name="usuario"]').value;
    var password = document.querySelector('input[name="contrasenna"]').value;

    // Verificar si el nombre de usuario y la contraseña son correctos
    if ((username === 'bonboncreamyyy' && password === 'cremoso22#') ||
        (username === 'josuezito18' && password === 'ratonzito18#') || 
        (username === 'ramona_flowersz' && password === 'jhonFlo17#') ||
        (username === 'alexis_rpg7' && password === 'amigazo128#') ||
        (username === 'littebodybigloveespresso' && password === 'feli15ane#')){
        // Redireccionar al usuario a otra página
        window.location.href = "inicio.html";
        } else{
        // Si las credenciales son incorrectas, puedes mostrar un mensaje de error
        alert("ACCESO DENEGADO. Por favor, introduce el user correcto o la contraseña correcta.");
        }
});