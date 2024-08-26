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

    function showThankYouMessage() {
        message.textContent = '¡Gracias por hacerme el hombre más feliz del mundo!';
        confetti(); // Llama al efecto de confeti al hacer clic en "Sí"
        
        // Ocultar los botones después de mostrar el mensaje
        buttonsContainer.style.display = 'none';
    }

    function swapButtons() {
        // Intercambiar los textos de los botones
        const yesText = yesButton.textContent;
        const noText = noButton.textContent;

        yesButton.textContent = noText;
        noButton.textContent = yesText;

        // Asignar los listeners para que solo se muestre el mensaje en el "Sí"
        yesButton.removeEventListener('click', swapButtons); // Asegura que "Sí" no intercambie botones
        yesButton.addEventListener('click', showThankYouMessage);

        noButton.removeEventListener('click', showThankYouMessage); // Asegura que "No" no muestre el mensaje
        noButton.addEventListener('click', swapButtons);
    }
});


