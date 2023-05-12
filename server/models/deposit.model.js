import { Schema, model } from "mongoose";
import { customAlphabet } from "nanoid";



const nanoid = customAlphabet('123456789abcdef', 10)
const depositSchema = new Schema({
    _id: {
        type: String,
        default: () => nanoid()
    },
    customerID: {
        type: Schema.Types.String, ref: 'customers'
    },
    savingaccountID:{
        type: Schema.Types.String, ref: "savingaccounts"
    },
    createAt: {
        type: Date, default: () => Date.now()
    },
})


const deposits = model('deposits', depositSchema)
export default deposits
