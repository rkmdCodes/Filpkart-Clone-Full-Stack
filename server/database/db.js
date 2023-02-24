import mongoose from "mongoose";


mongoose.set({'strictQuery':false});
export const Connection = async (userName,passWord)=>{

    try
    {
        const URL =`mongodb+srv://${userName}:${passWord}@flipkart.usik3cl.mongodb.net/?retryWrites=true&w=majority`;       
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
        console.log("DataBase Connected Successfully!")
    }
    catch(error)
    {
        console.log(`Error occured : ${error.message}`);
    }

}

export default Connection;