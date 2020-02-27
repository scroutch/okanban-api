const {Label} = require('../models');

const labelController = {
    allLabels: async(req, res) => {
        try{
            let labels = await Label.findAll();
            res.send(labels);
        }catch(err) {
            res.status(404).send("impossible de trouver le label");
        }
    },

    oneLabel: async(req, res) => {
        try{
            const labelId = req.params.id;
            let label = await Label.findByPk(labelId)
            res.send(label);
        }catch(err){
            res.status(404).send("impossible de trouver le label");
        }
    },

    labelAction: async(req, res) => {
        try{
            const title = req.body.title;
            const color = req.body.color;

            Label.create({
                title,
                color,
            })
            
            res.send("Title : " + title + " couleur :" + color );
        }catch(err){
            res.status(404).send("impossible de trouver le label");
        }
    },

    updateLabel: async(req, res) => {
        try{
            const labelId = req.params.id;
            const title = req.body.title;
            const color = req.body.color;
            let label = await Label.findByPk(labelId);
            if(label){
                label.update({
                    title,
                    color
                })
            }
            res.send(label.title + " " + label.color);
        }catch(err){
            res.status(404).send("impossible de trouver le label");
        }
    },

    deleteLabel: async(req, res) => {
        try{
            const labelId = req.params.id;
            let label = await Label.findByPk(labelId);
            if(label){
                label.destroy();
            }
            res.send("label numero "+ labelId + " supprimé");
        }catch(err){
            res.status(404).send("impossible de trouver le label");
        }
    }
};

module.exports = labelController;