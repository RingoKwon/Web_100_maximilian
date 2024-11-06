import generateName from "sillyName"
import {randomSuperhero} from 'superheroes';

// var generateName = require("sillyname");
var sillyName = generateName();
var heroName = randomSuperhero();

    console.log(`My name ${sillyName}`);
    console.log(`My name ${heroName}`);

