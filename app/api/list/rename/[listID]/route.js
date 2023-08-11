import connectToDB from "@utils/database";
import MyList from "@models/myList";

export const PATCH = async (req, { params }) => {
    const {listName} = await req.json();
    
    try {
        await connectToDB();
        const existingList = await MyList.findById(params.listID);
        if (!listName) return new Response("Prompt not found", {status: 404})
        existingList.name = listName;

        await existingList.save();

        return new Response(JSON.stringify(existingList), {
            status: 200
        })
    } catch(error) {
        return new Response("Failed to update the prompts", {status: 500})
    }
}