const User = require ("../models/UserModel.js")
const bcrypt = require ("bcrypt")
const { genneralAccessToken, genneralRfreshToken } = require("./JwtService.js")
const createUser =(newUser)=>{
   return new Promise ( async(resolve, reject)=>{
       const { name, email, password, confirmPassword, phone } = newUser
       
       try{
           const checkUser = await User .findOne({
               email:email
           })
           if(checkUser !==null){

           resolve({
              status:"oke",
              message :"email onl redly"
           })
       }
       const hash = bcrypt.hashSync(password,10)
            const createUser = await User.create({
               name,
                email,
               password :hash,
               confirmPassword :hash, 
               phone 
            })
            if (createUser) {
               resolve({ status :"oke",

                   message : "Succes",
                   data :createUser
               })
            }

       } catch(e){
           reject(e)
       }
   })
}

const loginUser =(userLogin)=>{
   return new Promise ( async(resolve, reject)=>{
       const { name, email, password, confirmPassword, phone } = userLogin
       
       try{
           const checkUser = await User.findOne({
               email:email
           })
           if(checkUser ===null){

           resolve({
              status:"oke",
              message :"useaaaanot undedfined"
           })
       }
      const comparePassword= bcrypt.compareSync(password, checkUser.password);
      console.log("comper",comparePassword);
       
           if (!comparePassword){
               resolve({
                   status:'oke',
                   message :'the pas or is corecct '
               })
           }
           const access_token = await genneralAccessToken({
               id :checkUser.id,
               isAdmin :checkUser.isAdmin


           })
           const refresh_token = await genneralRfreshToken({
               id :checkUser.id,
               isAdmin :checkUser.isAdmin


           })
           console.log('access_tolken',access_token);
           console.log('refresh_tolken',refresh_token);
               resolve({ status :"oke",
               status:'oke',
                   message : "Succes",
                   access_token ,
                   refresh_token
               })
            

       } catch(e){
           reject(e)
       }
   })

}
const updateUser =(id,data)=>{
 
   console.log("check id",id)
   return new Promise ( async(resolve, reject)=>{
       try{
           const checkUser = await User.findOne({
               _id:id
           })
           console.log("check ",checkUser)
           
           if(checkUser ===null){

           resolve({
              status:"oke",
              message :"user not undedfined"
           })   
       }
    const updateUser = await User.findByIdAndUpdate(id, data ,{new : true})
    console.log('check updte',updateUser);
               resolve({ 
               status:'oke',
                   message : "Succes",
data :updateUser
               })
            

       } catch(e){
           reject(e)
       }
   })
   
}
const deleteUser = (id) => {
   return new Promise(async (resolve, reject) => {
       try {
           const checkUser = await User.findOne({
               _id: id
           })
      
           await User.findByIdAndDelete(id)
           resolve({
               status: 'OK',
               message: 'Delete user success',
           })
       } catch (e) {
           reject(e)
       }
   })
}
const getAllUser = () => {
   return new Promise(async (resolve, reject) => {
       try {
    

           const allUser =await User.find()
           resolve({
               status: 'OK',
               message: ' success',
               data:allUser

           })
       } catch (e) {
           reject(e) 
       }
   })
}
const getDetailsUser = (id) => {
   
   return new Promise(async (resolve, reject) => {
       try {
           const user  = await User.findOne({
               _id: id
           })
           
      if(user=== null){
       resolve({
           status:'oke',
           message:"user not undefined"

       })
      }
 
         
           resolve({
               status: 'OK',
               message: ' success',
               data:user 
           })
       } catch (e) {
           reject(e)
       }
   })
}

module.exports= {createUser ,
loginUser,
updateUser,
deleteUser,
getAllUser,
getDetailsUser,
};