// Fonction calculate qui prend deux nombres et un opérateur et retourne le résultat de l'opération correspondante
function calculate(num1,num2,operator){
    //Convertit les chaines en nb si nécessaire
    num1=Number(num1);
    num2=Number(num2);
    
    // Vérifie l'opérateur et effectue l'opération correspondante
    switch(operator){
        case '+':
            // Addition des deux nombres
            return num1+num2;
        case '-':
            // Soustraction du second nombre au premier
           return num1-num2;
        case '*':
            // Multiplication des deux nombres
            return num1*num2;
        case '/':
             // Gestion du cas de division par zéro
            if (num2==0){
                return "Division by zero is not allowed";// Message d'erreur si le dénominateur est 0
            }
             // Division des deux nombres
            return num1/num2;
        default:
             // Retourne un message d'erreur si l'opérateur est invalide
            return "Invalid operator";
    }
}

// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, '+'));   // Affiche 8
console.log(calculate(10, 4, '-'));  // Affiche 6
console.log(calculate(7, 2, '*'));   // Affiche 14
console.log(calculate(12, 3, '/'));  // Affiche 4
console.log(calculate(8, 0, '/'));   // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, '%'));   // Affiche "Invalid operator"

// Exporte la fonction calculate pour l'utiliser dans d'autres fichiers
export default calculate
