require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');

const router = require('./app/router');
const sanitizeMiddleware = require('./app/middleware/sanitise');

const PORT = process.env.PORT || 5050;
const app = express();
const bodyParser = multer();

// Mise en place CORS
app.use(cors());
app.use( bodyParser.none() );

// on oublie pas le middleware pour le req.body
app.use(express.urlencoded({extended: true}));

// ici, req.body existe déjà (grace à urlencoded), et on veut l'assinir AVANT de le passer au router
app.use( sanitizeMiddleware );

app.use(router);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});