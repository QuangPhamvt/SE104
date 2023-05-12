import { Schema, model } from "mongoose";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet('123456789abcdef', 10)
const cashSchema = new Schema({
    _id: {
        type: String,
        default: () => nanoid()
    },
    customerID: {
        type: Schema.Types.String, ref: "customers",
    },
    creatAt: {
        type: Date, default: () => Date.now()
    },
    monney: Number,
})

const cashs = model("cashs", cashSchema)
export default cashs
