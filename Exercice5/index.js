// Attendre le chargement complet du DOM
document.addEventListener('DOMContentLoaded', function() {

    // 1. Ajouter des labels aux champs de formulaire
    const formInputs = [
        { id: 'name', label: 'Nom' },
        { id: 'email', label: 'Adresse e-mail' }
    ];

    formInputs.forEach(input => {
        // Vérifie si l'élément existe pour éviter les erreurs
        const inputElement = document.getElementById(input.id);
        if (inputElement) {
            // Crée un label et le lie à l'input
            const label = document.createElement('label');
            label.setAttribute('for', input.id);
            label.innerText = input.label;

            // Insère le label avant l'input dans le formulaire
            inputElement.parentNode.insertBefore(label, inputElement);
        }
    });

    // 2. Ajouter un attribut alt aux images si absent
    document.querySelectorAll('img').forEach(img => {
        if (!img.hasAttribute('alt')) {
            img.setAttribute('alt', 'Description de l\'image');
        }
    });

    // 3. Ajouter un attribut title aux liens si absent
    document.querySelectorAll('a').forEach(link => {
        if (!link.hasAttribute('title')) {
            link.setAttribute('title', 'Lien vers une ressource');
        }
    });
});
