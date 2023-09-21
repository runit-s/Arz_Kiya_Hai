import { connectToDB } from "@utils/database";
import Poem from "@models/poem";

export const GET = async (request) => {
    try {
        await connectToDB();

        const poems = await Poem.find({}).populate('creator');

        return new Response(JSON.stringify(poems), {status: 200})
    } catch (error) {
        return new Response("Failed to load all poems", {status: 500})
    }
}