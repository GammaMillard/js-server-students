import mongoose, { mongo } from "mongoose"

const dbConnection = async() => {

    try{

        await mongoose.connect(process.env.COMPASS)
        console.log('DB conectada');


    }catch (err) {
        console.log(err);
        throw new Error('Error al iniciar la DB')
    }



}

export {
    dbConnection
}