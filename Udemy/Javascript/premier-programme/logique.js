
// // IF / ELSE:
// let age = 40;

// // heure == 11
// // heure != 11
// // heure < 11
// // heure > 11
// // heure <= 11
// // heure >= 11

// if (age < 18) {
//     console.log("Vous n'êtes pas majeur.");
// }
// else if(age < 21) {
//     console.log("Vous êtes majeur en France.");
// }
// else {
//     console.log("Vous êtes majeur partout, à vous les casinos !");
// }

// // age
// // -18 : Vous n'êtes pas majeur
// // 18 et 20 : Vous êtes majeur en France
// // 21+ : Vous êtes majeur partout, à vous les casinos !





// // SWITCH :
// let consommable = "chocolat";

// switch(consommable) {

//     case "courgette":
//     case "carotte":   
//     case "pomme de terre":
//         console.log('Ceci est un légume');
//         break;
    
//     case "banane":
//         console.log('Ceci est un fruit');
//         break;

//     default:
//         console.log('Ceci n\'est ni un fruit ni un légume');

// }





// // OU / ET :
// let gareDeDepart = "Valenciennes";
// let gareDArrivee = "";
// let chauffeur = "";

// if((gareDeDepart != "" || gareDArrivee != "") && chauffeur != "") {
//   console.log('Le train va démarrer');
// }
// else {
//   console.log('Le train ne peut pas démarrer');
// }

// let x = 7;

// if(!x < 5) {
//     console.log('x est inférieur à 5.');
// }
// else {
//     console.log('x n\'est pas inférieur à 5.');
// }





// // CONDITION TERNAIRES :
// [x < 5] ? [console.log('x est inférieur à 5.')] : [console.log('x n\'est pas inférieur à 5.')];
// x < 5 ? console.log('x est inférieur à 5.') : console.log('x n\'est pas inférieur à 5.');


// let gareDeDepart = "Valenciennes";
// let gareDArrivee = prompt("Où souhaitez-vous aller ?") || "Gare du Nord";
// let chauffeur    = "Louis-Nicolas";

// if ((gareDeDepart != "" || gareDArrivee != "") && chauffeur != "") {
//     alert('Le train va démarrer à destination de ' + gareDArrivee + '.');
// }
// else {
//     alert('Le train ne peut pas démarrer.');
// }

// let x = 1;

// // CONDITION TERNAIRE
// x > 3 ? console.log('X est supérieur à trois') : console.log('X est inférieur à trois');

// if(x > 3) {
//     console.log('X est supérieur à trois');
// }
// else {
//     console.log('X est inférieur à trois');
// }





// // LES BOUCLES (WHILE)
// let i = 1;

// while (i <= 5) {
    
//     console.log('Ligne : ' + i);
//     i++;

// }





// // LES BOUCLES (DO WHILE)
// do {

//     var prenom = prompt('Quel est votre prénom ?');

// } while(prenom == "" || prenom == null)

// alert('Bonjour ' + prenom);






// // LES BOUCLES (FOR)
// Ici, la boucle "for" fait la même chose que la boucle while au-dessus, mais en 3 lignes
// for (let i = 1; i < 5; i++) {
//     console.log('Ligne : ' + i);
// }





// // BREAK / CONTINUE
// let i = 0;

// while (i < 5) {
  
//   // Break
//   if (i == 3) {
//     break;
//   }
  
//   // Continue
//   // if (i == 3) {
//   //   i++;
//   //   continue;
//   // }
  
//   console.log('Ligne : ' + i);
//   i++;
  
// }






// // ERREUR ?
// try {
//     // Erreur ?
//     let recompense = prompt("Choisissez une récompense : épée, arc, haches");
//     let degats;
    
//     switch(recompense) {
//       case 'épée':
//         degats = 40;
//         break;
//       case 'arc':
//         degats = 30;
//         break;
//       case'haches':
//         degats = 20;
//         break;
//       default:
//         throw new Error('Vous ne pouvez pas tricher.');
//     }
    
//     alert('Vous avez choisi : ' + recompense + ' (' + degats + ' dégats).');
//   }
//   catch(error) {
//     // Erreur !
//     alert(error);
//   }
//   finally {
//     alert('Fin du programme');
//   }





var obj = { 'France': 'Paris', 'England': 'London' };
// On parcourt les noms des propriétés
for (let country of Object.keys(obj)) {
    var capital = obj[country];
    console.log(country);
}
if (condition) {
  
}
else{

}
else