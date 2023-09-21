import PoemCard from "./PoemCard"

const Profile = ({name, desc, data, handleEdit, handleDelete}) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} की प्रोफाइल </span>
      </h1>
      <p className="desc text-left">{desc}</p>

      <div 
        className='mt-10 prompt_layout'>
        {data.map((post) => (
          <PoemCard
            key={post._id}
            post={post}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
    </div>
    </section>
  )
}

export default Profile