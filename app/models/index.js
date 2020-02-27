const List = require('./list');
const Label = require('./label');
const Card = require('./card');

//Association Liste <-> Carte
List.hasMany(Card, {
    foreignKey: "list_id",
    as: "cards"
});

Card.belongsTo(List, {
    foreignKey: "list_id",
    as: "list"
});

//Association Carte <-> Label
Card.belongsToMany(Label, {
    through: "card_has_label",
    foreignKey: "card_id",
    otherKey: "label_id",
    as: "labels",
    timestamps: false
});

Label.belongsToMany(Card, {
    through: "card_has_label",
    foreignKey: "label_id",
    otherKey: "card_id",
    as: "cards",
    timestamps: false
});

module.exports = {List, Label, Card};