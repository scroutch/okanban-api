
const models = require('../models');

// Pour rappel, ces 2 syntaxes sont strictement équivalente :
// - models.List // dot-noation
// - models['List']  // bracket-notation

// on va justement se servir de la bracket-notation pour accèder au bon modèle en fonction de la route

// on se fait une petite fonction, qui prend une string en paramètre, met le premier caractère en Majuscule, et renvoie directement la bonne classe (le bon modèle) !
const getModel = (className) => {
  //1. je veux passer de "list" à "List"
  // - prendre le premier caractère et le passer en majuscule
  // - prendre la chaine SANS le premier caractère
  // - concaténer le tout
  const modelName = className[0].toUpperCase() + className.slice(1);

  //2. renvoyer le model qui correspond à ce nom
  return models[modelName];
};

const genericController = {

  getAll: async (req, res, next) => {
    try {
      const entityName = req.params.entity;

      const allEntities = await getModel(entityName).findAll({
        include: {all: true, nested: true}
      });

      res.send(allEntities);
      
    } catch (error) {
      console.trace(error);
      res.status(500).send(error);
    }
  },

  getOne: async (req, res, next) => {
    try {
      const {entity, id} = req.params;

      const result = await getModel(entity).findByPk(id,{
        include: {all: true, nested: true}
      });

      if (!result) {
        return next();
      }

      res.send(result);
      
    } catch (error) {
      console.trace(error);
      res.status(500).send(error);
    }
  },

  create: async (req, res, next) => {
    try {
      const entityName = req.params.entity;
      const result = await getModel(entityName).create(req.body);
      
      res.send(result);
      
    } catch (error) {
      console.trace(error);
      res.status(500).send(error);
    }
  },

  update: async (req, res, next) => {
    try {
      const {entity, id} = req.params;

      const target = await getModel(entity).findByPk(id);

      if(!target) {
        return next();
      }

      await target.update(req.body);

      res.send(target);

    } catch (error) {
      console.trace(error);
      res.status(500).send(error);
    }
  },

  delete: async (req, res, next) => {
    try {
      const {entity, id} = req.params;

      const target = await getModel(entity).findByPk(id);

      if(!target) {
        return next();
      }

      await target.destroy();

      res.send("OK");

    } catch (error) {
      console.trace(error);
      res.status(500).send(error);
    }
  }

};


module.exports = genericController;