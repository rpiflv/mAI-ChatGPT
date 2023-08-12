import connectToDB from "@utils/database";
import MyList from "@models/myList";
import Prompt from "@models/prompt";
import { parsedUrlQueryToParams } from "next/dist/server/future/route-matches/route-match";

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

export const DELETE = async (req, { params }) => {
    try {
        await connectToDB();
        console.log(params.listID)
        const postsInList = await Prompt.find({list: params.listID}).exec();
        console.log(postsInList);
        postsInList.map(post => {
            post.list = null;
            post.save();
        }) 
        // await MyList.findByIdAndRemove(params.listID);
        // if (!prompt) return new Response("Prompts not found", {status: 404})
        return new Response("List deleted", {
            status: 200
        })
    } catch (error) {
        return new Response("Failed to delete the prompts", {status: 500})
    }
}