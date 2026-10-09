// Array
let Stationery = ["pen", "books", "notebook", "colours", "scale"];
console.log(Stationery);
console.log(Stationery.length);
Stationery[4]
console.log(Stationery[4]);
Stationery["pen"] ="pencil";
console.log(Stationery["pen"]);
// for loop
let fruits = ["apple", "banana", "grapes", "Kiwi", "mango", "pineapple"]
for (let idx=0; idx<fruits.length; idx++){
    console.log(fruits[idx]);
}
// for of
let cities =["delhi", "bhp", "pune", "jbp", "mumbai",]
for (let city of cities) {
    console.log(city);
    console.log(city.toUpperCase());
}
// Push():
let colours = ["blue", "red", "yellow", "green", "black",]
console.log(colours);
colours.push("grey");
console.log(colours);

// Pop():
let language = ["C++", "C", "javascript", "python", "java",]
console.log(language);
language.pop();
console.log(language);
let deletedlanguage = language.pop();
console.log("deleted", deletedlanguage);

// tostring():
let watches = ["Casio", "Titan", "sonata", "fastrack", "rolex",]
console.log(watches);
console.log(watches.toString());
console.log(watches);

// concat
let marvelheroes = ["thor", "spiderman", "ironman",];
let dcHeroes = ["superman", "batman",];
let heroes = marvelheroes.concat(dcHeroes);
console.log(heroes)
// unshift():
marvelheroes.unshift("antman");
console.log(marvelheroes)

// shift():
let val = marvelheroes.shift();
console.log("deleted", val)
