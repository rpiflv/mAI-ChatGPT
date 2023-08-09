import connectToDB from "@utils/database";
import Prompt from "@models/prompt";

export const PATCH = async (req, { params }) => {
    const {listId} = await req.json();
    try {
        await connectToDB();
        const existingPrompt = await Prompt.findById(params.promptID);
        if (!existingPrompt) return new Response("Prompt not found", {status: 404})
        existingPrompt.list = listId;
        await existingPrompt.save();
        return new Response(JSON.stringify(existingPrompt), {
            status: 200
        })
    } catch(error) {
        return new Response("Failed to update the prompt", {status: 500})
    }
}
