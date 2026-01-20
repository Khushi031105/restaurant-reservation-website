import mongoose from 'mongoose';
import validator from 'validator';

const reservationSchema = new mongoose.Schema({
    firstName : {
        type:String,
        require:true,
        minLength:[3,"FirstName must contain atleast 3 characters !"],
        maxLength : [30,"FirstName must contain atmost 30 characters !"],
    },
    lastName : {
        type:String,
        require:true,
        minLength:[3,"LastName must contain atleast 3 characters !"],
        maxLength : [30,"LastName must contain atmost 30 characters !"],
    },
    email:{
        type:String,
        required:true,
        validate : [validator.isEmail,"Email should be valid!"],
    },
    phone:{
        type:String,
        required:true,
        minLength:[10,"Phone no. must contain atleast 10 digits!"],
        maxLength:[10,"Phone no. must contain atmost 10 digits!"],
    },
    time:{
       type:String,
        required:true, 
    },
    date:{
       type:String,
        required:true, 
    }
});

export default mongoose.model("Reservation",reservationSchema);