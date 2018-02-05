// @ts-check


/** 
 * Como vamos, todo eso parece util?
 */
var pregunta;


// Comentarios

// Aqui hay un comentario
// que sigue aqui, linea por linea

/*  Tambien hay commentarios en bloques
como esa, que tiene un comenzo y un fin.
Ese tipo es recommendable solo usarlo para 
documentacion del codigo
*/


console.log("A line of code");
console.log("Another line of code");

/* 
console.log("Here is more code in a block comment");
*/

console.log("A bit later more code");

// Documentating your code - JSDoc http://usejsdoc.org/about-getting-started.html
// Your documentation show up in the intellisence, this also is supported in Brackets
// Start with /** note double asterix * this automagically turns it into JSDoc comments
// To generate HTML documentation install jsdoc
// npm install -g jsdoc

/** This is the current month we are processing
 *  This should be set at the start of the program
 */
var thisMonth;


quit();





//Editing shortcuts

console.log('here is line to copy'); //Duplicate line Shift+Alt+DownArrow or Shift+Alt+UpArrow

console.log('and a line or '); //Alt+UpArrow and Alt+DownArrow
console.log('two to move'); //Alt+UpArrow and Alt+DownArrow

console.log('or one to delete'); //Ctrl+Shift+K


//Snippets pre-made and user made
/*
log + (tab) => console.log(|); //integrated

lg  + (tab) => console.log('|'); //user made

ejemplos:
fun => function sceleton
for => for loop sceleton
etc...
*/



//Renaming and Refactoring by extraction

//Rename F2
var not_a_good_name = "Friday";
console.log(not_a_good_name);

//Make a function of selection and Ctrl+.


//Type check
// var age = "50";
// age = "jonas";

//pregunta


// 3 raised to the power of 4, exponentiation operator ** new in ECMAScript 2016 (ES7)
console.log(3**4);

//Not to be confused with Bitwise XOR
console.log(3^4);  // 0011 | 0100 == 0111 == 7


function quit() {
    process.exit(0);
}

