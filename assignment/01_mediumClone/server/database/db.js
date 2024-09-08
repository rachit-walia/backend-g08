import mongoose from "mongoose"


export const Connection= async()=>{
    try{
        const URL=`mongodb+srv://rachitwalia3:<rachitwalia@cluster0.md3xt.mongodb.net/`;
        mongoose.connect(URL,{useNewUrlParser:true});
        console.log("Database connected successfully");
    }
    catch(error){
        console.log("Error while connection with the database",error);

    }
}
export default Connection;