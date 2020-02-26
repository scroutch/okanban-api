const Liste = require('./liste');
const Label = require('./label');
const Carte = require('./carte');

//Association Liste <-> Carte
Liste.hasMany(Carte, {
    foreignKey: "liste_id",
    as: "cartes"
});

Carte.belongsTo(Liste, {
    foreignKey: "liste_id",
    as: "liste"
});

//Association Carte <-> Label
Carte.belongsToMany(Label, {
    through: "cartes_has_labels",
    foreignKey: "liste_id",
    otherKey: "label_id",
    as: "labels"
});

Label.belongsToMany(Carte, {
    through: "cartes_has_labels",
    foreignKey: "label_id",
    otherKey: "liste_id",
    as: "cartes"
});

module.exports = {Liste, Label, Carte};