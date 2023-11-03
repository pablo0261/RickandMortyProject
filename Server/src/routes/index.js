const express  = require('express')
const router = express.Router();//ver si aqui no va index.!!
const getCharById = require('../controllers/getCharById')
const handleFavorites = require('../controllers/handleFavorites')
const login = require('../controllers/login')
// const {postFav, deleteFav} = require('../controllers/login')

router.get('/character/:id', getCharById);
router.get('/login', login);
router.post('/fav', handleFavorites.postFav); //ver si saco el handleFavorites.
router.delete('/fav/:id', handleFavorites.deleteFav);

module.exports = router;
