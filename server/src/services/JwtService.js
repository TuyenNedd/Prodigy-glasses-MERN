const jwt = require ('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
 const genneralAccessToken = async (payload) =>{
    console.log('payload' ,payload);
const access_token = jwt.sign({
    payload
},process.env.ACCESS_TOKEN,{expiresIn:'5h'})
return access_token
}
const genneralRfreshToken= async (payload) =>{
    console.log('payload' ,payload);
const refresh_token = jwt.sign({
payload
},process.env.REFRESH_TOKEN,{expiresIn:'365d'})
return refresh_token
}
const refreshTokenJwtService=  (token) =>{
   
    
        return new Promise( (resolve, reject) => {
            try {

      
        jwt.verify(token,process.env.REFRESH_TOKEN, async (err,user)=>{
            if (err){
                resolve({
                    status :'err',
                    message:'the authtic '
                })
            }
            console.log('user',user);
            const {payload}=user
            const access_token = await genneralAccessToken({
                id : payload?.id,
                isAdmin: payload?.isAdmin
            })
            console.log('accccc',access_token);
            resolve({
                status: 'OK',
                message: ' success',
                access_token   
            })
        })
       
       
            } catch (e) {
                reject(e)
            }
        })
    }
     


module.exports ={
    genneralAccessToken,
    genneralRfreshToken,
    refreshTokenJwtService
}