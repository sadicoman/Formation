// ouvrir une fenêtre
window.open("https://believemy.com");

// redimensionner la fenêtre
let fenetre = window.open("https://believemy.com", "", "width=900, height=700");

function resize() {
	fenetre.resizeTo(700, 470);
}

// fermer la fenêtre
let fenetre = window.open("https://believemy.com", "", "width=900, height=700");

function resize() {
	fenetre.close();
}
