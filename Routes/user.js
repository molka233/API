const express=require('express')
const router=express.Router()
const Contact= require("../model/User")

// Ajouter un nouveau utilisateur à la base de données
router.post('/add',async(req,res)=> {
try {
   const{firstname,name,email,password}=req.body;
   const newUser= new user ({firstname,name,email,password})
   await newUser.save();
   res.status(200).send({msg:'user added',newUser})

} catch(error){
res.status(400).send({msg:'can not add this user'})
}

})

// Retourner tous les utilisateurs
router.get('/all',async(req,res)=> {
    try {
       const listUsers=await User.find();
       res.status(200).send({msg:'userlist',listUsers})
    
    } catch(error){
    res.status(400).send({msg:'can not get users'})
    }
    
    })
// supprimer un utilisateur par ID
    router.delete('/:_id',async(req,res)=> {
        try {
           const {_id}=req.params;
           await Contact.findOneAndDelete({_id}) 
           res.status(200).send({msg:'user deleted'})
        
        } catch(error){
        res.status(400).send({msg:'can not delete users'})
        }
        
        })  
// Editer un utilisateur par ID
 router.put('/:_id',async(req,res)=> {
        try {
           const {_id}=req.params;
           const updateUser= await Contact.updateone({_id},{$set:{...req}})
           res.status(200).send({msg:'user updated'}) 
        } catch(error){
            res.status(400).send({msg:'can not update users'})
            }
            
            })  
        

module.exports=router;