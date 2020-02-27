// premier reflexe : dotenv
require('dotenv').config();

const express = require('express');
const PORT = process.env.PORT || 5000;

const app = express();

// pour pouvoir récupérer les données en POST, on a besoin de urlencoded
app.use(express.urlencoded({extended: true}));

// router
const router = require('./app/router');
app.use(router);


// on lance l'application
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});