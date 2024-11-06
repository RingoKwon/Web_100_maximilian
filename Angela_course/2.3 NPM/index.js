import generateName from "sillyname"
import superheroes from 'superheroes';

// var generateName = require("sillyname");
var sillyName = generateName();
var heroName = superheroes.randomSuperhero;

    console.log(`My name ${sillyName}`);
    console.log(`My name ${heroName}`);

