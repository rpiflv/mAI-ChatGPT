import connectToDB from "@utils/database";
import MyList from "@models/myList";

export const POST = async (req, res) => {
    const {userId, listName} = await req.json();
    console.log(userId, listName)
    try {
        await connectToDB();
        const newList = new MyList({
            owner: userId, name: listName
        })

        await newList.save();
        return new Response(JSON.stringify(newList), {status: 201})
    } catch(error) {
        return new Response("Failed to create a new list", {status: 500})
    }
}