// const Recipie = require("../models/recipieModel");
// const User = require("../models/userModel");

// const getRecipies = async (req, res) => {
//   try {
//     const recipies = await Recipie.find({});
//     res.setHeader("Content-Type", "application/json");
//     res.status(200).json(recipies);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ message: error.message });
//   }
// };

// const getOnerecipie = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const recipie = await recipie.findById(id);
//     res.setHeader("Content-Type", "application/json");
//     res.status(200).json(recipie);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ message: error.message });
//   }
// };

// const postrecipie = async (req, res) => {
//   try {
//     const recipie = await recipie.create(req.body);
//     const userdata = await User.findById(req.body.author);
//     console.log(userdata)
//     userdata.recipies.push(recipie.id); 
//     await userdata.save(); 
//     res.status(200).json(recipie);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ message: error.message });
//   }
// };

// const searchrecipie = async (req, res) => {
//   try {
//     const searchTerm = req.query.q;
//     const searchResults = await recipie.find({
//       $text: {
//         $search: searchTerm,
//       },
//     });

//     res.json(searchResults);
//   } catch (error) {
//     console.error("Error during search:", error);
//     res.status(500).json({ error: "An error occurred during the search" });
//   }
// };
// module.exports = { getRecipies , getOnerecipie, postrecipie, searchrecipie };