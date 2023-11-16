const express = require('express');
const router = express.Router();
const getCharById = require('../controllers/getCharById');
const login = require('../controllers/login');
const postUser = require('../controllers/postUser');
const postFav = require('../controllers/postFav');
const deleteFav = require('../controllers/deleteFav');

router.get('/character/:id', getCharById);
router.get('/login', login);
router.post('/login', postUser);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

module.exports = router;


// router.get("/login", async (req, res) => {
//     try {
//       const { email, password } = req.query;
  
//       if (!email || !password) {
//         return res.status(400).json({ message: "Faltan datos" });
//       }
  
//       const user = await User.findOne({ where: { email } });
  
//       if (user.password !== password) {
//         return res.status(400).json({ message: "Invalid password" });
//       }
//       res.status(200).json({ access: true, message: "Access conceded" });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });
  
//   router.post("/login", async (req, res) => {
//     try {
//       const { email, password } = req.body;
  
//       if (!email || !password) {
//         return res
//           .status(400)
//           .json({ message: "Email and password must be valid" });
//       }
  
//       const existingUser = await User.findOne({ where: { email } });
//       if (existingUser) {
//         return res.status(409).json({ message: "User already exists" });
//       }
  
//       const newUser = await User.create({
//         email: email,
//         password: password,
//       });
//       return res.status(200).json({ messaje: "User registered successfully" });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });
  
//   router.post("/fav", async (req, res) => {
//     try {
//       const { name, origin, status, image, species, gender } = req.body;
  
//       if (!name || !status || !gender) {
//         return res.status(400).json({ message: "Missing information" });
//       }
//       const newFavorite = await Favorite.create({
//         name,
//         origin,
//         status,
//         image,
//         species,
//         gender,
//       });
//       res
//         .status(201)
//         .json({ message: "Favorite created successfully", newFavorite });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });
  
//   router.delete("/fav/:id", async (req, res) => {
//     const { id } = req.params;
//     const favDelete = await Favorite.findOne({ where: { id } });
//     if (!favDelete) {
//       return res.status(404).json({ message: "No favorite found with that id." });
//     }
//     try {
//       const deletedFav = await favDelete.destroy();
//       res.status(200).json({ message: "Favorite deleted successfully", deletedFav });
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   });
  
//   router.get('/character/:id', getCharById);
  

