"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";
import { set } from "mongoose";

const EditPoem
 = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const poemId = searchParams.get('id');

    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        poem: '',
        tag: '',
    });

    useEffect(() => {
        const getPoemDetails = async () => {
            const response = await fetch(`/api/poem/${poemId}`);
            const data = await response.json();

            setPost({
                poem: data.poem,
                tag: data.tag,
            })
        }

        if(poemId) getPoemDetails()
    }, [poemId])

    const updatePost = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        if(!poemId) return alert('Poem Id not Found')

        try {
            const res = await fetch(`/api/poem/${poemId}`,
            {   method: 'PATCH',
                body: JSON.stringify({
                    poem: post.poem,
                    tag: post.tag
                })
            })

            if(res.ok){
                router.push('/');
            }
        } catch (error) {
            console.log(error);
        }finally {
            setSubmitting(false);
        }
    }

  return (
    <Form
        type="Edit"
        post={post}
        setPost={setPost}
        submitting={submitting}
        setSubmitting={setSubmitting}
        handleSubmit={updatePost}
    />
  )
}

export default EditPoem
