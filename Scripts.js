document.addEventListener('DOMContentLoaded', () => {
    const welcomeNextButton = document.getElementById('welcomeNextButton');
    const questionNextButton = document.getElementById('questionNextButton');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const questionMessage = document.getElementById('questionMessage');
    const mainContent = document.getElementById('mainContent');
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

    document.getElementById('yesButton').addEventListener('click', () => {
        message.textContent = '¡Gracias por hacerme el hombre más feliz del mundo!';
        confetti(); // Llama al efecto de confeti al hacer clic en "Sí"
    });

    // Función para mover el botón "No"
    function moveNoButton() {
        const containerRect = mainContent.getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();

        let newLeft = Math.random() * (window.innerWidth - buttonRect.width);
        let newTop = Math.random() * (window.innerHeight - buttonRect.height);

        // Asegurarse de que el botón permanezca dentro de la ventana de visualización
        if (newLeft < containerRect.left) newLeft = containerRect.left;
        if (newTop < containerRect.top) newTop = containerRect.top;
        if (newLeft + buttonRect.width > containerRect.right) newLeft = containerRect.right - buttonRect.width;
        if (newTop + buttonRect.height > containerRect.bottom) newTop = containerRect.bottom - buttonRect.height;

        noButton.style.position = 'absolute';
        noButton.style.left = `${newLeft}px`;
        noButton.style.top = `${newTop}px`;
    }

    // Event listener para PC
    noButton.addEventListener('mouseover', moveNoButton);

    // Event listener para móviles
    noButton.addEventListener('touchstart', moveNoButton);
});

