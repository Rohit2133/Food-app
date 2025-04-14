import mongoose from "mongoose";


export const connectDB = async () => {
    mongoose.connect('mongodb+srv://foodapp123:foodapp123@cluster0.0gznnpw.mongodb.net/food-app').then(() => console.log("db connected"))
}