document.addEventListener('DOMContentLoaded', () => {
    const welcomeNextButton = document.getElementById('welcomeNextButton');
    const questionNextButton = document.getElementById('questionNextButton');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const questionMessage = document.getElementById('questionMessage');
    const mainContent = document.getElementById('mainContent');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const message = document.getElementById('message');
    const buttonsContainer = document.querySelector('.buttons');

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
    yesButton.addEventListener('click', showThankYouMessage);

    // Intercambiar posiciones de los botones "Sí" y "No" al tocar o hacer clic en "No"
    noButton.addEventListener('click', swapButtons);
    noButton.addEventListener('touchstart', swapButtons);

    function showThankYouMessage() {
        message.textContent = '¡Gracias por hacerme el hombre más feliz del mundo!';
        confetti(); // Llama al efecto de confeti al hacer clic en "Sí"
        
        // Ocultar los botones después de mostrar el mensaje
        buttonsContainer.style.display = 'none';
    }

    function swapButtons() {
        // Guardar las posiciones actuales
        const yesButtonRect = yesButton.getBoundingClientRect();
        const noButtonRect = noButton.getBoundingClientRect();

        // Intercambiar posiciones
        yesButton.style.position = 'absolute';
        noButton.style.position = 'absolute';

        yesButton.style.left = `${noButtonRect.left}px`;
        yesButton.style.top = `${noButtonRect.top}px`;

        noButton.style.left = `${yesButtonRect.left}px`;
        noButton.style.top = `${yesButtonRect.top}px`;

        // Convertir el "No" en "Sí" y mostrar el mensaje
        noButton.textContent = "Sí";
        noButton.removeEventListener('click', swapButtons);
        noButton.addEventListener('click', showThankYouMessage);
    }
});

