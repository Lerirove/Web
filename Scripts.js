document.addEventListener('DOMContentLoaded', () => {
    const welcomeNextButton = document.getElementById('welcomeNextButton');
    const questionNextButton = document.getElementById('questionNextButton');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const questionMessage = document.getElementById('questionMessage');
    const mainContent = document.getElementById('mainContent');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const message = document.getElementById('message');

    // Al hacer clic en "Siguiente" del mensaje de bienvenida
    welcomeNextButton.addEventListener('click', () => {
        welcomeMessage.style.display = 'none';
        questionMessage.style.display = 'block';
    });

    // Al hacer clic en "Siguiente" del mensaje intermedio
    questionNextButton.addEventListener('click', () => {
        questionMessage.style.display = 'none';
        mainContent.style.display = 'block';
    });

    // Mostrar mensaje de agradecimiento y confeti al hacer clic en "Sí"
    yesButton.addEventListener('click', () => {
         message.innerHTML = '¡Gracias por hacerme el hombre más feliz del mundo!<br>Love you <3'; // Agrega un salto de línea con <br>
        confetti(); // Llama al efecto de confeti al hacer clic en "Sí"
        
        // Ocultar los botones después de mostrar el mensaje
        yesButton.style.display = 'none';
        noButton.style.display = 'none';
    });

    // Mover el botón "No" al pasar el cursor (o tocar en dispositivos móviles)
    noButton.addEventListener('mouseover', moveButton);
    noButton.addEventListener('touchstart', moveButton); // Añadir evento para dispositivos táctiles

    function moveButton() {
        const containerRect = mainContent.getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();

        let newLeft = Math.random() * (containerRect.width - buttonRect.width);
        let newTop = Math.random() * (containerRect.height - buttonRect.height);

        noButton.style.position = 'absolute';
        noButton.style.left = `${newLeft}px`;
        noButton.style.top = `${newTop}px`;
    }
});

