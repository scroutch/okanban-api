require('dotenv').config();
const Liste = require('./app/models/list');
const Carte = require('./app/models/card');
const Label = require('./app/models/label');

Liste.findAll().then((listes) => {
    for(let liste of listes) {
        console.log(liste.title)
    }
}).catch((err) => {
    console.log(err);
});

Liste.findByPk(2).then((liste) => {
    console.log(liste.id);
    console.log(liste.title);
}).catch((err) => {
    console.log(err);
});

Carte.findAll().then((cartes) => {
    for(let carte of cartes) {
        console.log(carte.title);
        console.log(carte.position);
    }
});

Label.findAll().then((labels) => {
    for(let label of labels) {
        console.log(label.title);
    }
});
