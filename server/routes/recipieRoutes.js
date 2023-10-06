const express = require('express');
const router = express.Router();
const {getRecipies, searchrecipie} = require("../controllers/recipieController");

// router.post('/signup',addUser);
// router.post('/signin',Login);
// router.post('/update-password' , updatePassword);
router.get('/getrecipies' , getRecipies)
router.get("/search-recepie" , searchrecipie)

module.exports = router;
