const express = require('express');

const router = express.Router();


const listController = require('./controllers/listController');
const cardController = require('./controllers/cardController');
const labelController = require('./controllers/labelController');

router.get('/list', listController.homePage);
router.get('/list/:id', listController.oneList);
router.post('/list', listController.listAction);
router.patch('/list/:id', listController.updateList);
router.delete('/list/:id', listController.deleteList);

router.get('/card', cardController.allCards);
router.get('/card/:id', cardController.oneCard);
router.post('/card', cardController.cardAction);
router.patch('/card/:id', cardController.updateCard);
router.delete('/card/:id', cardController.deleteCard);

router.get('/label', labelController.allLabels);
router.get('/label/:id', labelController.oneLabel);
router.post('/label', labelController.labelAction);
router.patch('/label/:id', labelController.updateLabel);
router.delete('/label/:id', labelController.deleteLabel);

module.exports = router;