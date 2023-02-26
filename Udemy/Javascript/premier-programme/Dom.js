let h1 = document.getElementsByTagName("h1")[0];
h1.textContent = "Hello World !";
h1.innerHTML = "<div style='font-weight: normal'>Hello World !</div>";

console.log(h1);

// 1ère méthode : Ecrit juste un texte
document.write("test");

// 2ème méthode : Ajouter un élément brut
let h1 = document.querySelector("h1");
h1.append("test");

// 3ème méthode (celle pour les objets)
// Créer un élément
let helloWorld = document.createElement("div");

// Le personnaliser
helloWorld.textContent = "Hello World !";

// L'ajouter à notre page
// document.body.append(helloWorld); (après)
// document.body.appendChild(helloWorld); (après)

// document.body.insertBefore(helloWorld, document.querySelector('.container'));

document.querySelector(".container").prepend(helloWorld);

//Supprimer un élément
document.querySelector("h1").remove();

// 1ère méthode : décomposée
let header = document.querySelector("header");
header.style.backgroundColor = "#ffbd69";

// 2ème méthode : directe
document.querySelector("h1").style.color = "#111d5e";
document.querySelector("h1").style.textAlign = "center";

// 3ème méthode : avec une classe
document.querySelector("header").className = "ma_class";
