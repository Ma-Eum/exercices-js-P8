// Fonction calculateAverage qui prend un tableau de nombres et retourne la moyenne de ces nombres
function calculateAverage(numbers){
    // Vérifie si le tableau est vide ou s'il n'y a pas d'argument fourni
    if (!numbers || numbers.length === 0){
        // Si le tableau est vide ou non fourni, retourne un message d'erreur
        return "No numbers to calculate average";
    }
    // Calcule la somme de tous les nombres du tableau
    let sum=0;
    for (let i=0;i<numbers.length;i++){
        sum+=numbers[i]; // Ajoute chaque élément du tableau à la somme
    }
    // Calcule la moyenne en divisant la somme par le nombre d'éléments dans le tableau
    let average=sum/numbers.length;
    
    // Retourne la moyenne
    return average;
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

// Exporte la fonction calculateAverage pour l'utiliser dans d'autres fichiers
export default calculateAverage
