//GFT's Challenge

//Variable Hero's Name
let heroName = "Gleice"

//Variable Hero's XP
let heroXp = 7000

//Variable Hero's Level
let level

// Desicion Structure to determine the Hero's Level based on th XP
if (heroXp <=1000) {
    level = "Ferro";        
} else if (heroXp >= 1001 && heroXp <= 2000) {
    level = "Bronze";
} else if (heroXp >= 2001 && heroXp <= 5000) {
    level = "Prata";
} else if (heroXp >= 5001 && heroXp <= 7000) {
    level = "Ouro";
} else if (heroXp >= 7001 && heroXp <= 8000) {
    level = "Platina";
} else if (heroXp >= 8001 && heroXp <= 9000) {
    level = "Ascendente";
} else if (heroXp >= 9001 && heroXp <= 10000) {
    level = "Imortal";
} else {
    level = "Radiante";
}
    
console.log ("O herói de nome " + heroName + " está no level " + level)