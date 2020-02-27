const {List} = require('../models');

const listController = {
    homePage: async(req, res) => {
        try{
            let listes = await List.findAll();
            res.send(listes);
        }catch(err) {
            res.status(404).send("impossible de trouver la liste");
        }
    },

    oneList: async(req, res) => {
        try{
            const listId = req.params.id;
            let list = await List.findByPk(listId)
            res.send(list);
        }catch(err){
            res.status(404).send("impossible de trouver la liste");
        }
    },

    listAction: async(req, res) => {
        try{
            const title = req.body.title;
            const position = req.body.position;

            const name = await List.findOne({
                where: {
                    title
                }
            });

            if(name){
                res.status(404).send("La liste existe déjà");
            }else{
                List.create({
                    title,
                    position
                })
            }
            res.send("Title : " + title + " position :" + position);
        }catch(err){
            res.status(404).send("impossible de trouver la liste");
        }
    },

    updateList: async(req, res) => {
        try{
            const listId = req.params.id;
            const title = req.body.title;
            const position = req.body.position;
            let list = await List.findByPk(listId);
            if(list){
                list.update({
                    title,
                    position
                })
            }
            res.send(list.title + " " + list.position);
        }catch(err){
            res.status(404).send("impossible de trouver la liste");
        }
    },

    deleteList: async(req, res) => {
        try{
            const listId = req.params.id;
            let list = await List.findByPk(listId);
            if(list){
                list.destroy();
            }
            res.send("Liste numero "+ listId + " supprimée");
        }catch(err){
            res.status(404).send("impossible de trouver la liste");
        }
    }
};

module.exports = listController;