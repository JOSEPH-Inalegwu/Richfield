
function Testimonial({
  userName = 'Undefined',
  userPic = 'src/assets/profilepic01.jpg',
  testimonial,
  userJob = 'Frontend Developer'
}) {

  return (
    <div>
      <div className='container my-4 mt-10 md:my-20 rounded-md  w-[90%] bg-white/50 border-white py-4 shadow-md 
      hover:bg-white/90 hover:shadow-lg cursor-pointer'>
        <div className='flex items-center justify-center pb-4'>
          <img src={userPic} alt='' 
          className='w-[40%] rounded-full'
          />
        </div>
        <p className='text-gray-600 px-4'
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Est similique hic, corporis fugit quos tempore voluptatum 
          ducimus at sit perspiciatis.</p>

        <h4 className='text-lg font-bold pt-4 text-black/85'
        >{userName}</h4>

        <h5 className='text-sm text-gray-600'
        >{userJob}</h5>
      </div>
    </div>
  );
}

export default Testimonial;



