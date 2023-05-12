import {Schema, model} from "mongoose";
import { customAlphabet} from "nanoid";

const nanoid = customAlphabet('123456789abcdef', 10)

const customerSchema = new Schema({
    _id: {
        type: String,
        default: () => nanoid()
    },
    CMND:{
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    fullName: {
        type: String,
        required: true,
        maxLength: 20,
    },
    address: {
        type: String,
    },
})

const customers = model('customers', customerSchema)
export default customers 


