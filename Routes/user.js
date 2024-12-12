const express = require('express');
const router = express.Router();
const User = require('../model/User'); // Assurez-vous que le modèle User est correctement importé

// Route pour ajouter un utilisateur
router.post('/add', async (req, res) => {
  const { firstname, name, email, password } = req.body;

  try {
    // Vérifier si l'utilisateur existe déjà
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ msg: 'User with this email already exists' });
    }

    // Créer un nouvel utilisateur
    const newUser = new User({ firstname, name, email, password });
    await newUser.save();

    res.status(201).send({ msg: 'User added successfully', userAdded: newUser });
  } catch (err) {
    res.status(500).send({ msg: 'Failed to add user', error: err.message });
  }
});

// Route pour récupérer tous les utilisateurs
router.get('/all', async (req, res) => {
  try {
    const listUsers = await User.find();
    res.status(200).send({ msg: 'User list retrieved successfully', users: listUsers });
  } catch (error) {
    res.status(500).send({ msg: 'Failed to retrieve users', error: error.message });
  }
});
router.delete('/:_id',async(req,res)=> {
   try {
      const {_id}=req.params;
      await Contact.findOneAndDelete({_id}) 
      res.status(200).send({msg:'user deleted'})
   
   } catch(error){
   res.status(400).send({msg:'can not delete users'})
   }
   
   })  

router.put('/:_id',async(req,res)=> {
   try {
      const {_id}=req.params;
      const updateUser= await Contact.updateone({_id},{$set:{...req}})
      res.status(200).send({msg:'user updated'}) 
   } catch(error){
       res.status(400).send({msg:'can not update users'})
       }
       
       })  

module.exports = router;
