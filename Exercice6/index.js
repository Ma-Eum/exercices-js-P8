// Sélectionner l'élément d'affichage où le texte sera mis à jour
const display = document.getElementById('display');

// Fonction pour ajouter des caractères au display
function appendToDisplay(value) {
    display.value += value; // Ajouter la valeur cliquée au contenu du display
}

// Fonction pour effacer le contenu du display
function clearDisplay() {
    display.value = ''; // Réinitialiser l'affichage à une chaîne vide
}

// Fonction pour calculer le résultat de l'opération
function calculateResult() {
    try {
        // Évaluer l'expression dans display.value
        const result = eval(display.value);

        // Vérification pour empêcher la division par zéro
        if (display.value.includes('/0')) {
            display.value = 'Division by zero is not allowed';
        } else {
            display.value = result; // Afficher le résultat dans le display
        }
    } catch (error) {
        display.value = 'Error'; // En cas d'erreur, afficher un message d'erreur
    }
}
