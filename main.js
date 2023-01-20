import './style.css';
import Chart from 'chart.js/auto'

let createCanvasOne = document.querySelector("#table1"); //sélectionne l'élément avec l'id "table1" et l'affecte à la variable 'createCanvasOne'
let firstCanvas = document.createElement("canvas"); //crée un nouvel élément canvas et l'affecte à la variable 'firstCanvas'
createCanvasOne.before(firstCanvas); //insère l' firstCanvasélément avant le'createCanvasOne'élément dans le DOM
firstCanvas.setAttribute("id", "graph1"); //définit un attribut id sur le 'firstCanvas' élément avec la valeur "graph1"


function replace_comma_by_dot(decimal) {
	return parseFloat((decimal+"").replace(",","."));
}


//Describe variable graph1

var table = document.getElementById("table1");
var country=[];
var year=[];
var period1=[];
var period2=[];
var period3=[];
var period4=[];
var period5=[];
var period6=[];
var period7=[];
var period8=[];
var period9=[];
var period10=[];
var period11=[];
for (let i=2; i<table.rows.length; i++) { //La boucle commence à 2 ( i=2) car la première ligne d'un tableau est généralement utilisée comme en-tête et n'est pas pertinente dans ce cas.
    //La variable 'table' fait une référence à un élément de table HTML.
    let row=table.rows[i]
    let countryt1 = row.cells[1].innerText;
    country.push(countryt1);//La variable country est un tableau utilisé pour stocker les noms de pays.
    // Pour chaque itération de la boucle, le texte intérieur de la deuxième cellule de la ligne actuelle est enregistré dans une variable nommée 'countryt1', puis cette variable est ajoutée au 'country' tableau.
}
let rowyears=table.rows[1];// La première ligne de code affecte la valeur de la deuxième ligne du tableau ( table.rows[1]) à une variable nommée 'rowyears'
for (let i=2; i<rowyears.cells.length; i++) { //Le code entre alors dans une boucle for, commençant à la deuxième cellule de la ligne ( i=2) et continuant jusqu'à la fin de la ligne ( i<rowyears.cells.length)
    let yeart1 = rowyears.cells[i].innerText;
    year.push(yeart1);//Dans la boucle, le texte interne de chaque cellule est affecté à une variable nommée 'yeart1', puis ajouté à un tableau nommé 'year' à l'aide de la push() méthode
}   //e code prend le texte intérieur de chaque cellule de la deuxième ligne d'un tableau, en commençant par la deuxième cellule, et l'ajoute à un tableau appelé year.


for (let i=2; i<table.rows.length; i++) {
    let period1t1 = table.rows[i].cells[2].innerText;
    period1.push(replace_comma_by_dot(period1t1));
}
for (let i=2; i<table.rows.length; i++) {
    let period2t1 = table.rows[i].cells[3].innerText;
    period2.push(replace_comma_by_dot(period2t1));
}
for (let i=2; i<table.rows.length; i++) {
    let period3t1 = table.rows[i].cells[4].innerText;
    period3.push(replace_comma_by_dot(period3t1));
}
for (let i=2; i<table.rows.length; i++) {
    let period4t1 = table.rows[i].cells[5].innerText;
    period4.push(replace_comma_by_dot(period4t1));
}
for (let i=2; i<table.rows.length; i++) {
    let period5t1 = table.rows[i].cells[6].innerText;
    period5.push(replace_comma_by_dot(period5t1));
}
for (let i=2; i<table.rows.length; i++) {
    let period6t1 = table.rows[i].cells[7].innerText;
    period6.push(replace_comma_by_dot(period6t1));
}
for (let i=2; i<table.rows.length; i++) {
    let period7t1 = table.rows[i].cells[8].innerText;
    period7.push(replace_comma_by_dot(period7t1));
}
for (let i=2; i<table.rows.length; i++) {
    let period8t1 = table.rows[i].cells[9].innerText;
    period8.push(replace_comma_by_dot(period8t1));
}
for (let i=2; i<table.rows.length; i++) {
    let period9t1 = table.rows[i].cells[10].innerText;
    period9.push(replace_comma_by_dot(period9t1));
}
for (let i=2; i<table.rows.length; i++) {
    let period10t1 = table.rows[i].cells[11].innerText;
    period10.push(replace_comma_by_dot(period10t1));
}
for (let i=2; i<table.rows.length; i++) {
    let period11t1 = table.rows[i].cells[12].innerText;
    period11.push(replace_comma_by_dot(period11t1));
}

let graph1 = document.getElementById('graph1').getContext('2d');
 const myChart = new Chart(graph1){
   type:'bar',
   data:[
    country
   ]

   options: {}
 }