function convertToBinary() {
    // Sélectionner le champ de saisie et lire la valeur entrée par l'utilisateur
    const decimalInput = document.getElementById('decimalInput').value;
    
    // Sélectionner l'élément où le résultat binaire sera affiché
    const binaryResult = document.getElementById('binaryResult');

    // Vérifier si l'entrée est un nombre entier positif valide
    if (!/^\d+$/.test(decimalInput)) {
        // Si l'entrée n'est pas un nombre valide, vider le champ de résultat et arrêter la fonction
        binaryResult.textContent = '';
        return;
    }

    // Convertir l'entrée en un entier pour effectuer la conversion
    const decimalNumber = parseInt(decimalInput, 10);

    // Effectuer la conversion décimal vers binaire
    const binary = decimalNumber.toString(2); // Utiliser la méthode native de conversion en binaire

    // Afficher le résultat de la conversion binaire
    binaryResult.textContent = binary;
}
