 
const express = require('express');

// const listController = require('./controllers/listController');
// const cardController = require('./controllers/cardController');
// const labelController = require('./controllers/labelController');
const genericController = require('./controllers/genericController');

const cardToLabelController = require('./controllers/cardToLabelController');

const router = express.Router();


// router.get('/list', listController.getAll);
// router.get('/list/:id', listController.getOne);
// router.post('/list', listController.create);
// router.patch('/list/:id', listController.update );
// router.delete('/list/:id', listController.delete);

// router.get('/card', cardController.getAll);
// router.get('/card/:id', cardController.getOne);
// router.post('/card', cardController.create);
// router.patch('/card/:id', cardController.update);
// router.delete('/card/:id', cardController.delete);

// router.get('/label', labelController.getAll);
// router.get('/label/:id', labelController.getOne);
// router.post('/label', labelController.create);
// router.patch('/label/:id', labelController.update);
// router.delete('/label/:id', labelController.delete);

/** Version factorisée */
router.get('/:entity', genericController.getAll );
router.get('/:entity/:id', genericController.getOne );
router.post('/:entity', genericController.create);
router.patch('/:entity/:id', genericController.update);
router.delete('/:entity/:id', genericController.delete);

router.post('/card/:id/label', cardToLabelController.associate);
router.delete('/card/:card_id/label/:label_id', cardToLabelController.dissociate);

// un petit 404 en derner
router.use( (req, res) => {
  res.status(404).send("Not Found");
});

module.exports = router;