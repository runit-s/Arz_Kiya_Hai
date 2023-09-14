'use client';

import { useState, useEffect } from 'react'
import PoemCard from './PoemCard';


const CardList = ({data, handleTagClick}) => {
  return(
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <PoemCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [allPosts, setAllPosts] = useState([])

  const handleSearchChange = (e) => {

  }
  
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/poem');
      const data = await response.json();
  
      setAllPosts(data);
    }

    fetchPosts();
  }, []);
  

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>
      
      <CardList
        data={allPosts}
        handleTagClick={() => {}}
      />
    </section>
  )
}

export default Feed