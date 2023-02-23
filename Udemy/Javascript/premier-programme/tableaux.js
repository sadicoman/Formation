let monTableau = new Array('un', 'deux', 'trois');
let monTableau = Array('un', 'deux', 'trois');
let monTableau = ['un', 'deux', 'trois'];

monTableau.push('cinq');
monTableau.unshift('zero');
monTableau.pop(); // supprime le dernier élément
monTableau.shift(); // supprime le premier élément
// console.log(monTableau[0])
console.log(monTableau[monTableau.length - 1]);


// Ancienne version
let monTableau2D = new Array(
    Array('Mark', 'Jeff', 'Bill'),
    Array('Zuckerberg', 'Bezos', 'Gates')  
);

// Nouvelle version
let monTableau2D = [
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];
console.log(monTableau2D[1][2]);
monTableau2D[0].shift(); // supprime le premier élément, de mon premier élément (donc, Mark)

// tableau associatif
let monTableauAssociatif = {
    'prenom' : 'Mark',
    'nom'    : 'Zuckerberg',
    'poste'  : 'PDG de Facebook'
};
monTableauAssociatif['nationalite'] = 'Américaine';
console.log(monTableauAssociatif);
console.log(monTableauAssociatif['poste']);
delete(monTableauAssociatif.poste);

let monTableau = ['un', 'deux', 'trois', 'quatre'];
console.log(monTableau.indexOf('deux')); // retourne 1




let monTableau = ['un', 'deux', 'trois', 'quatre'];
// console.log(monTableau.join(' / '));

let monTableau2D = [
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];
console.log(monTableau2D.join(' / '));





let monTableau = ['un', 'deux', 'trois', 'quatre'];
monTableau.splice(1, 0, 'random', 'pie');
// console.log(monTableau);

let monTableau2D = [
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];
monTableau2D.splice(2, 0, ['30', '45', '70']);
console.log(monTableau2D);

let monTableauAssociatif = {
    'prenom' : 'Mark',
    'nom'    : 'Zuckerberg',
    'poste'  : 'PDG de Facebook'
};
// console.log(monTableauAssociatif);





let monTableau2D = [
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];
monTableau2D.splice(2, 0, ['30', '45', '70']);
console.log(monTableau2D);





let panier = ['fraise', 'banane', 'poire'];

for (const fruit in panier) {
    console.log(panier[fruit]);
}




let panier = ['fraise', 'banane', 'poire'];

for (const fruit of panier) {
  // console.log(fruit);
  console.log(panier.indexOf(fruit));
}







let listeDePays = ['France', 'Belgique', 'Japon', 'Maroc'];

listeDePays.forEach(pays => console.log(pays));











let monTableauAssociatif = {
    'prenom'    : 'Mark',
    'nom'       : 'Zuckerberg',
    'poste'     : 'PDG de Facebook'
};

function concatener(tableau) {
    let chaine = '';

    for (const valeur in tableau) {
        
        chaine += (valeur + ' : ' + tableau[valeur] + '\n');

    }

    console.log(chaine);
}

concatener(monTableauAssociatif);









