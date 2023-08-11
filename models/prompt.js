import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    prompt: {
        type: String,
        required: [true, "Prompt is required"]
    },
    tag: {
        type: String,
        required: [true, "Tag is required"]
    },
    list: {
        type: Schema.Types.ObjectId,
        ref: "MyList",
        default: null
    }
})

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt