import mongoose , {Schema} from "mongoose";
const userData = new Schema({

    name: {
        type:String, 
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,   
        required: true,
    },


    createdate: {
        type: Date,
        default: Date.now(),
    },
    
});

const usermodelData = mongoose.model("users",userData);
export default usermodelData