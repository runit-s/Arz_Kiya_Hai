import { connectToDB } from "@utils/database";
import Poem from "@models/poem";
//GET to read

export const GET = async (request, {params}) => {
    try {
        await connectToDB();

        const poem  = await Poem.findById(params.id).populate('creator');
        if(!poem)return new Response("Poem not found", {status: 404})

        return new Response(JSON.stringify(poem), {status: 200})
    } catch (error) {
        return new Response("Failed to load all poems", {status: 200})
    }
}

// PATCH to edit

export const PATCH = async (request, { params }) => {
    const { poem, tag } = await request.json();

    try {
        await connectToDB();

        // Find the existing prompt by ID
        const existingPoem = await Poem.findById(params.id);

        if (!existingPoem) {
            return new Response("Prompt not found", { status: 404 });
        }

        // Update the prompt with new data
        existingPoem.poem = poem;
        existingPoem.tag = tag;

        await existingPoem.save();

        return new Response("Successfully updated the Poem", { status: 200 });
    } catch (error) {
        return new Response("Error Updating Poem", { status: 500 });
    }
};

//DELETE to delete
export const DELETE = async (request, {params}) => {
    try {
        await connectToDB();
        await Poem.findByIdAndRemove(params.id)

        return new Response("Poem deleted successfully", {status: 200})
    } catch (error) {
        
        return new Response("Failed tp delete poem.", {status: 500})
    }
}