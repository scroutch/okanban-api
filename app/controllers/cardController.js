const {Card} = require('../models');

const cardController = {
    allCards: async(req, res) => {
        try{
            let cards = await Card.findAll();
            res.send(cards);
        }catch(err) {
            res.status(404).send("impossible de trouver la carte");
        }
    },

    oneCard: async(req, res) => {
        try{
            const cardId = req.params.id;
            let card = await Card.findByPk(cardId)
            res.send(card);
        }catch(err){
            res.status(404).send("impossible de trouver la carte");
        }
    },

    cardAction: async(req, res) => {
        try{
            const title = req.body.title;
            const position = req.body.position;
            const color = req.body.color;
            const list_id = req.body.list_id;

            
            Card.create({
                title,
                position,
                color,
                list_id
            })
            
            res.send("Title : " + title + " position :" + position + " couleur :" + color + " appartient à la liste : " + list_id);
        }catch(err){
            res.status(404).send("impossible de trouver la carte");
        }
    },

    updateCard: async(req, res) => {
        try{
            const cardId = req.params.id;
            const title = req.body.title;
            const position = req.body.position;
            const color = req.body.color;
            const list_id = req.body.list_id;
            let card = await Card.findByPk(cardId);
            if(card){
                card.update({
                    title,
                    position,
                    color,
                    list_id
                })
            }
            res.send(card.title + " " + card.position + " " + card.color + " " + card.list_id);
        }catch(err){
            res.status(404).send("impossible de trouver la carte");
        }
    },

    deleteCard: async(req, res) => {
        try{
            const cardId = req.params.id;
            let card = await Card.findByPk(cardId);
            if(card){
                card.destroy();
            }
            res.send("carte numero "+ cardId + " supprimée");
        }catch(err){
            res.status(404).send("impossible de trouver la carte");
        }
    }
};

module.exports = cardController;