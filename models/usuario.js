import { Schema, model } from "mongoose";

const TestSchema = Schema({
    
    name : {
        type: String,
        required : [true, 'Nombre es obligatorio']
    },
    email : {
        type: String,
        required : [true, 'Correo es obligatorio'],
        unique : true
    },
    password : {
        type: String,
        required : [true, 'Contraseña es obligatoria']
    },
    img: {
        type: String
    },
    rol: {
        type : String,
        required: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    isConnected:{
        type:Boolean,
        default : true
    },
    google: {
        type: Boolean,
        default: false
    }

})

const StudentSchema = Schema({
    first_name: {
        type : String,
        required: true
    },
    last_name: {
        type : String,
        required: true
    },
    age: {
        type : Number,
        required: true
    },
    email: {
        type : String,
        required: true
    },
    major: {
        type : String,
        required: true
    },
    gpa: {
        type : Number,
        required: true
    },
    graduation_date: {
        type : String,
        required: true
    },
    address: {
        type : String,
        required: true
    },
    phone_number: {
        type : String,
        required: true
    },
})

export default model('Usuario', StudentSchema)