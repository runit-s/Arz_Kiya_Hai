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
  const [allPosts, setAllPosts] = useState([])

  //For Search
  const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/poem');
      const data = await response.json();
      
      setAllPosts(data);
    }
    
    fetchPosts();
  }, []);
  
  
  //For Search
  const filterPoems = (searchtext) => {
    const regex = new RegExp(searchtext); 
    return allPosts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) 
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    const searchResult = filterPoems(e.target.value);
    setSearchedResults(searchResult);
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPoems(tagName);
    setSearchedResults(searchResult);
  };
  
  
  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='नाम या tag से ढूँढे...'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>
      
      {searchedResults ? (
        <CardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <CardList
          data={allPosts}
          handleTagClick={handleTagClick}
        />
      )}
    </section>
  )
}

export default Feed