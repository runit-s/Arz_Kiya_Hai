import Link from 'next/link';

const Form = ({ type ,post, setPost, submitting,  setSubmitting, handleSubmit}) => {
  return (
    <section className=' w-full max-w-full flex-start flex-col '>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Poem</span>            {/* to change */}
      </h1>
      <p className='desc text-left max-w-md'>                       
        {type} and share amazing prompts with the world, and          {/* to change */}
        let your imagination run wild.                                {/* to change */}
      </p>

      <form 
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-3xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your Poem                                                  {/* to change */}
          </span>                                 

          <textarea
            value={post.poem}
            onChange={(e) => setPost({ ...post,
            poem: e.target.value})}
            placeholder='Write your poem here...'
            required
            className='form_textarea'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Tag  {' '}                                               {/* to change */}
            <span className='font-normal'> (#Motivational, #Religious, #Patriotic) </span>
          </span>                                 

          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post,
            tag: e.target.value})}
            placeholder='#tags'
            required
            className='form_input'
          />
        </label>
        
        <div className='flex-end mx-3 mb-5 gap-4 '>
              <Link href='/' className='text-grey-500 text-sm'>
                Cancel
              </Link>
              <button
                type='submit'
                disabled={submitting}
                className='px-5 py-1.5 text-sm bg-blue-600 rounded-full text-white '
              >
                {submitting ? `${type}ing...`: type}
              </button>
        </div>
        
      </form>

    </section>
  )
}

export default Form