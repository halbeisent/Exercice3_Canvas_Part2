var smallCake = document.getElementById('ptitBiscuit');
var drawProcess = smallCake.getContext('2d');

// Définition du remplissage dès le début


//Dessin du visage
drawProcess.beginPath();
drawProcess.arc(202,60,50,0,Math.PI*2,true);
drawProcess.closePath();
drawProcess.fillStyle = "#976F0F";
drawProcess.fill();
// Dessin de la bouche
drawProcess.beginPath();
drawProcess.moveTo(185,80);
drawProcess.quadraticCurveTo(200,100,220,80);
drawProcess.moveTo(185,80);
// On réinitialise la pisition
drawProcess.quadraticCurveTo(200,120,220,80);
drawProcess.strokeStyle = "#fa0500";
drawProcess.stroke();

// On créé le corps en commençant par le bras gauche
drawProcess.beginPath();
drawProcess.moveTo(60,100);
drawProcess.quadraticCurveTo(40,120,60,130);
drawProcess.lineTo(60,130);
// Côté gauche du corps
drawProcess.lineTo(170,130);
drawProcess.lineTo(170,320);
// Côté droit du corps
drawProcess.lineTo(230,320);
drawProcess.lineTo(230,130);
// On finit par le bras droit et on ferme le chemin
drawProcess.lineTo(350,130);
drawProcess.quadraticCurveTo(370,120,350,100);
drawProcess.lineTo(350,100);
drawProcess.closePath();
drawProcess.fillStyle = "#976F0F";
drawProcess.fill();
//On trace les yeux en fermant bien le chemin à chaque fois
drawProcess.beginPath();
drawProcess.arc(180,50,10,0,Math.PI*2,true);
drawProcess.closePath();
drawProcess.fillStyle = '#FFFFFF';
drawProcess.fill();
drawProcess.beginPath();
drawProcess.arc(225,50,10,0,Math.PI*2,true);
drawProcess.closePath();
drawProcess.fillStyle = '#FFFFFF';
drawProcess.fill();
// On oublie pas les sourcils
drawProcess.beginPath();
drawProcess.moveTo(170,37);
drawProcess.quadraticCurveTo(180,20,190,35);
drawProcess.moveTo(210,37);
drawProcess.quadraticCurveTo(230,20,240,35);
drawProcess.strokeStyle = "#ffffff";
drawProcess.stroke();
// On fait les boutons
drawProcess.beginPath();
drawProcess.arc(203,140,10,0,Math.PI*2,true);
drawProcess.closePath();
drawProcess.arc(203,175,10,0,Math.PI*2,true);
drawProcess.closePath();
drawProcess.fillStyle = '#7A2976';
drawProcess.fill();
//On fait les jambes
drawProcess.beginPath();
drawProcess.moveTo(170,320);
drawProcess.lineTo(170,380);
drawProcess.quadraticCurveTo(180,400,190,380);
drawProcess.lineTo(190,340);
drawProcess.quadraticCurveTo(200,320,210,340);
drawProcess.lineTo(210,380);
drawProcess.quadraticCurveTo(230,400,230,320);
drawProcess.closePath();
drawProcess.fillStyle = "#976F0F";
drawProcess.fill();
