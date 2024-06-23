/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
// Lire les entrées
const L = parseInt(readline());
const H = parseInt(readline());
const T = readline().toUpperCase(); // Convertir le texte en majuscules

// Lire les lignes ASCII art pour les lettres de A à Z et ?
let asciiArt = [];
for (let i = 0; i < H; i++) {
  asciiArt.push(readline());
}

// Fonction pour obtenir l'index d'un caractère dans l'art ASCII
const getCharIndex = (char) => {
  const charCode = char.charCodeAt(0);
  if (charCode >= 65 && charCode <= 90) {
    return charCode - 65; // 'A' à 'Z'
  }
  return 26; // Index du '?'
};

// Initialiser un tableau pour les lignes de sortie
let output = Array(H).fill("");

// Construire les lignes de sortie
for (let i = 0; i < T.length; i++) {
  const index = getCharIndex(T[i]);
  for (let j = 0; j < H; j++) {
    let line = "";
    for (let k = index * L; k < (index + 1) * L; k++) {
      line += asciiArt[j][k];
    }
    output[j] += line;
  }
}

// Afficher les lignes de sortie
for (let j = 0; j < H; j++) {
  console.log(output[j]);
}

/* 2


/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **
// Lire les entrées
const L = parseInt(readline());
const H = parseInt(readline());
const T = readline().toUpperCase(); // Convertir le texte en majuscules

// Lire les lignes ASCII art pour les lettres de A à Z et ?
let asciiArt = [];
for (let i = 0; i < H; i++) {
    asciiArt.push(readline());
}

// Fonction pour obtenir l'index d'un caractère dans l'art ASCII
const getCharIndex = (char) => {
    const charCode = char.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
        return charCode - 65; // 'A' à 'Z'
    }
    return 26; // Index du '?'
}

// Initialiser un tableau pour les lignes de sortie
let output = Array(H).fill('');

// Construire les lignes de sortie
for (let i = 0; i < T.length; i++) {
    const index = getCharIndex(T[i]);
    for (let j = 0; j < H; j++) {
        const startIndex = index * L;
        const endIndex = startIndex + L;
        output[j] += asciiArt[j].slice(startIndex, endIndex);
    }
}


// Afficher les lignes de sortie
for (let j = 0; j < H; j++) {
    console.log(output[j]);
}

*/
