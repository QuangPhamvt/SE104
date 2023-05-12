import { customAlphabet } from "nanoid";
import { Schema, model } from "mongoose";


const nanoid = customAlphabet('123456789abcdef', 10)

const typeSavingSchema = new Schema({
    _id: {
        type: String,
        default: () => nanoid(),
    },
    nameType: {
        type: String,
        unique: true,
    },
    rate: {
        type: Number,
    },
})

const savingAccountSchema = new Schema({
    _id: {
        type: String,
        default: () => nanoid()
    },
    customerID: {
        type: Schema.Types.String, ref: 'customers',  
    },
    typeSavingID: {
        type: Schema.Types.String, ref: 'typesavings',    
    },
    createAt: {
        type: Date,
        default: () => Date.now()
    },
    money: {
        type: Number,
        default: 1000000,
    }
})
savingAccountSchema.index({ "customerID._id": 1, "typeSavingID._id": 1 }, { unique: true, })

export const typesavings = model('typesavings', typeSavingSchema)
const savingaccounts = model('savingaccounts', savingAccountSchema)
export default savingaccounts
