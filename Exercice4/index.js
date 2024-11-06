document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM complètement chargé");

    const button = document.getElementById('myButton');
    console.log("Bouton trouvé :", button);

    button.addEventListener('click', function() {
        console.log("Bouton cliqué");

        if (!document.getElementById('message')) {
            const message = document.createElement('p');
            message.id = 'message';
            message.textContent = "Bonjour, vous avez cliqué sur le bouton !";
            button.insertAdjacentElement('afterend', message);
            console.log("Paragraphe ajouté :", message);
        } else {
            console.log("Le paragraphe existe déjà, aucune action supplémentaire");
        }
    });
});
