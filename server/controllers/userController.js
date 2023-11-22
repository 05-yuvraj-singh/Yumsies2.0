// const jwt=require('jsonwebtoken')

const User = require("../models/userModel");

const addUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    // console.log(error.message)
    res.status(500).json({ message: error.message });
  }
};


// const jwtSecret = 'your-secret-key'; 
// const jwtExpiration = '6h'; 

const Login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({
      username: username,
      password: password,
    });

    if (user) {
      // const token = jwt.sign({ userId: user._id }, jwtSecret, {
      //   expiresIn: jwtExpiration,
      // });
      console.log("login successful")
      return res.status(200).json({
        
        success: true,
        message: "Login Successful",
        // token: token,
      });
    } else {
      console.log("user does not exist")
      return res.status(401).json({
        success: false,
        message: "INVALID LOGIN CREDENTIALS",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// const updatePassword = async (req,res) =>{
//   try {
//     const {username ,  newpassword } = req.body;
//     const user = await User.findOne({
//       username : username 
//     })
    
//     user.password = newpassword;
//     await user.save();
    
//     return res.status(200).json({
//       success: true,
//       message: "Password Update Successful",
//     })
//   }
//   catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// }

// const searchUser = async (req, res) => {
//   try {
//     const searchTerm = req.query.term;
//     const searchResults = await User.find({
//       $or: [
//         { name: { $regex: searchTerm, $options: 'i' } }, 
//         { username: { $regex: searchTerm, $options: 'i' } }, 
//       ],
//     });
//     res.json(searchResults);
//   } 
//   catch (error) {
//     console.error("Error during search:", error);
//     res.status(500).json({ error: "An error occurred during the search" });
//   }
  
// };

// const getInfo = async (req,res) =>{
//   const username =   req.query.username
//   const user = await User.findOne({
//     username : username 
//   })
//   res.status(200).json(user)    
// }


// function sendMail(){
  
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'vishwanathanchaturvedi@gmail.com',
//         pass: password,
//       },
//       tls: {
//         rejectUnauthorized: false,
//       },
//     });
    
//     transporter.verify(function (error, success) {
//       if (error) {
//         console.error('Nodemailer configuration error:', error);
//       } else {
//         console.log('Nodemailer is ready to send emails');
//       }
//     });  
//   }



// module.exports = { addUser, Login , searchUser , updatePassword  , getInfo , sendMail };
module.exports = { addUser, Login }

