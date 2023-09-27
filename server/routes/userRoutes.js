const express = require('express');
const router = express.Router();
const {addUser  , Login , updatePassword , searchUser , getInfo ,sendMail} = require("../controllers/userController");

router.get('/verification',sendMail)
router.post('/signup',addUser);
router.post('/signin',Login);
router.post('/update-password' , updatePassword);
router.get("/getusers" , searchUser)
router.get("/getuserdetails" , getInfo)

module.exports = router;
