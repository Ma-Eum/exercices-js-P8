// Fonction pairNumbers qui retourne une chaîne de caractères avec les nombres pairs
// entre un minimum (min) et un maximum (max), séparés par une virgule
function pairNumbers(min,max){
     // Initialisation d'un tableau vide pour stocker les nombres pairs
    let result=[];

    // Boucle qui parcourt les nombres de min à max
    for(let i=min;i<=max;i++){
        // Vérifie si le nombre est pair en utilisant l'opérateur modulo (%)
        // Si i est divisible par 2, c'est un nombre pair
        if(i%2===0){
            // Ajoute le nombre pair au tableau result
            result.push(i);
        }
    }
     // Transforme le tableau en une chaîne de caractères avec les éléments séparés par des virgules
    return result.join(',');
}

//Exemple d'utilisation
console.log(pairNumbers(1,10)); // Ca affichera : 2,4,6,8,10

// Exporte la fonction pairNumbers pour pouvoir l'utiliser dans d'autres fichiers
export default pairNumbers;
