'use client';

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";       
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";


const MyProfile = () => {
    const router = useRouter();

    const {data : session} = useSession();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
          const response = await fetch(`/api/users/${session?.user.id}/posts`);
          const data = await response.json();
      
          setPosts(data);
        }
    
        if(session?.user.id)fetchPosts();
      }, [session]);


    const handleEdit = (post) => {
        router.push(`/update-poem?id=${post._id}`)
    }
    const handleDelete = async (post) => {
      const hasConfirmed = confirm("क्या आप वाकई इस पोस्ट को हटाना चाहते हैं?");

      if(hasConfirmed) {
        try {
          await fetch (`/api/poem/${post._id.toString()}`, {
            method: 'DELETE'
          });

          const filteredPosts = posts.filter((p) => p._id !== post._id);

          setPosts(filteredPosts);
          
        } catch (error) {
          console.log(error);
        }
      }
    }

  return (
    <Profile
        name="आप"
        desc="आपका कविता संग्रह। "
        data={posts}
        handleDelete={handleDelete}
    />
  )
}

export default MyProfile