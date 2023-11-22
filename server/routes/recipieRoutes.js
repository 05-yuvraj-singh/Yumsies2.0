const express = require('express');
const router = express.Router();
const {getRecipies, searchrecipie, postrecipie} = require("../controllers/recipieController");

// router.post('/signup',addUser);
// router.post('/signin',Login);

router.post('/add-recepie' , postrecipie);
router.get('/getrecipies' , getRecipies)
router.get("/search-recepie" , searchrecipie)

module.exports = router;
