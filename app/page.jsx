import Feed from "@components/feed"

const Home = () => {
  return (
    <section className="
      w-full
      flex-center
      flex-col
    ">
      <h1 className=" head_text text-center ">
        Discover and Share                          {/*To change*/}
        <br className="max-md:hidden " />
        <span className="orange_gradient text-center ">     {/* to change  orange- diff colour */} 
          AI-Powered Prompts                        {/* to change*/} 
        </span>          
      </h1>
      <p className="desc text-center  ">
        An open-source poem writing platform,
        for young and old,
        for female and male,
        for professionals and non-professionals,
        for anyone who wants to write.
      </p>

      <Feed />
    </section>
  )
}

export default Home