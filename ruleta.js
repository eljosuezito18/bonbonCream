let passwordEntered = false;

function checkPassword() {
    const password = prompt('Ingrese la contraseña:', ''); // Solicita al usuario que ingrese la contraseña
    // Verifica si la contraseña es correcta
    if (password === 'bonmochila777#') {
        passwordEntered = true;
        alert('Elige tu premio');
    } else {
        alert('Contraseña Incorrecta MANQUE');
    }
}

function revealPrize(prize) {
    if (!passwordEntered) {
        alert('INGRESAS LA CONTRASEÑA? GRACIAS');
        return; // Sale de la función si la contraseña no se ha ingresado correctamente
    }

    const result = document.getElementById('result');
    const circles = document.querySelectorAll('.circle');
    const prizes = {
        'saludo': 'Saludo',
        'zing': 'Zing',
        'jugar': 'Jugar conmigo',
        'playlist': 'Pongo tu playlist',
        'decide': 'Decides el juego',
        'nada': 'Nada',
        'timeout': 'Timeout'
    };

    const message = prizes[prize];
    result.textContent = `¡Felicidades! Has ganado: ${message}`;

    // Deshabilita todos los círculos
    circles.forEach(circle => {
        circle.style.pointerEvents = 'none'; // Deshabilita la interacción con el círculo
        circle.style.opacity = '0.5'; // Reduce la opacidad para indicar que está deshabilitado
    });
}