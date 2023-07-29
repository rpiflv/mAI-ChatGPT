import { Schema, model, models } from "mongoose";

const MyListSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    prompt: {
        type: Schema.Types.ObjectId,
        ref: "Prompt"
    },
})

const MyList = models.MyList || model("MyList", MyListSchema);

export default MyList