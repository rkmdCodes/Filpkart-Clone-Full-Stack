import User from "../model/userSchema.js";

export const userSignup = async (request , response)=>
{ 

    try{
        
        const exist = await User.findOne({username:request.body.username});
        if(exist)
        {
            response.status(401).json({message:'Username already exists!'})
        }
        else{
        const user =new User(request.body);
         await user.save();
  
        response.status(200).json({message:user});
        }
    }catch(error)
    {
        response.status(500).json({message:error.message});
    }

}