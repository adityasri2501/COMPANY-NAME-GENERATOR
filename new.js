/* CREATE A BUSINESS NAME GENERATOR Y COMBINING LIST OF ADJECTIVES AND SHOP NAME AND ANOTHER WORDS

ADJECTIVE:
CRAZY
AMAZING
FIRE 

SHOP NAME:
ENGINE
FOODS
GARMENTS

ANOTHER WORD:
BROS 
LIMITED
HUB

*/

function adjective(a) {
    if(a > 0 && a <= 33){
        return "CRAZY";
    } else if (a > 33 && a <= 66){
        return "AMAZING";
    } else{
        return "FIRE";
    }
}

function shop_name(b) {
    if(b > 0 && b <= 33){
        return "ENGINE";
    } else if (b > 33 && b <= 66){
        return "FOODS";
    } else{
        return "GARMENTS";
    }
}

function another_word(c) {
    if(c > 0 && c <= 33){
        return "BROS";
    } else if (c > 33 && c <= 66){
        return "LIMITED";
    } else{
        return "HUB";
    }
}

let a = Math.floor(Math.random()*100);
let b = Math.floor(Math.random()*100);
let c = Math.floor(Math.random()*100);

console.log(`a = ${a}, b = ${b}, c = ${c}`);

console.log(`THE COMPANY NAME = ${adjective(a)} ${shop_name(b)} ${another_word(c)}`)

let adjective_1 = {
    1: "CRAZY",
    2: "AMAZING",
    3: "FIRE"
}

let shop_name_1= {
    1: "ENGINE",
    2: "FOODS",
    3: "GARMENTS"
}

let another_word_1= {
    1: "BROS",
    2: "LIMITED",
    3: "HUB"
}

let d = Math.floor(Math.random()*3 + 1);
let e = Math.floor(Math.random()*3 + 1);
let f = Math.floor(Math.random()*3 + 1);

console.log(`d = ${d}, e = ${e}, f = ${f}`);

console.log(`THE COMPANY NAME = ${adjective_1[d]} ${shop_name_1[e]} ${another_word_1[f]}`);

