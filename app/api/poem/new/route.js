import { connectToDB } from "@utils/database";
import Poem from "@models/poem";

export const POST = async (req) => {
    const { userID, poem, tag } = await req.json();

    try {
        await connectToDB();
        const newPoem = new Poem({
            creator: userID,
            poem,
            tag
        })

        await newPoem.save();

        return new Response(JSON.stringify(newPoem), {status: 201})
    } catch (error) {
        return new Response("Failed to create a new Post", {status: 500})
    }
}