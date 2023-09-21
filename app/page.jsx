import Feed from "@components/Feed"

const Home = () => (
    <section className="
      w-full
      flex-center
      flex-col
    ">
      <h1 className=" head_text text-center mb-4">
        <span className="text-center " >     {/* to change  orange- diff colour */} 
          खोजिए अपनी दुनिया,     {/* to change*/} 
        </span>   
        <br />
                
      </h1>
      <h1>
        <span className="head_text orange_gradient text-center" >     {/* to change  orange- diff colour */} 
          अपनी कलम से।                        {/* to change*/} 
        </span>  
      </h1>
      <p className="desc text-center  ">
        अपने अंदर छुपे कवि को बाहर निकालें, अपनी कलम के सहारे। 
        <br />
        और मिलिये कई छुपे कलाकारों से, उनकी कलम के सहारे। 
      </p>

      <Feed />
    </section>
  
);

export default Home;