import connectToDB from "@utils/database";
import MyList from "@models/myList";

export const GET = async (req, { params }) => {
    try {
        await connectToDB();

        const lists = await MyList.find({
            owner: params.id
        }).populate('owner');
        return new Response(JSON.stringify(lists), {
            status: 200
        })
    } catch(error) {
        return new Response("Failed to fetch all lists", {status: 500})

    }
}