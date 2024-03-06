import mongoose from "mongoose";

export const coonectDB = async () => {
    try {
     await  mongoose.connect(process.env.DB_CONNECTION);
     console.log("Base de datos conectada");
    } catch (error) {
        console.log(error);
    }
}