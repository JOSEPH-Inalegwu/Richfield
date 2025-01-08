// import React from 'react'
import Card from '../HomeCard/Card'
import Testimonial from '../Others/Testimonial'
import { motion } from 'motion/react'

function Home() {

  return (
  <section className='bg-gray-100'>
   <div className="py-16 lg:px-20 flex flex-col-reverse items-center md:flex-row
        px-6 bg-white/60">
        <div className="flex flex-col md:w-1/2 space-y-8">
            <motion.h1 
               initial={{opacity: 0, y: 50}}
               whileInView={{opacity: 1, y: 0, transition: {delay: 0.2, duration: 0.4}}}
               viewport={{once: true, amount: .5}}
            
            className="max-w-md text-4xl text-slate-800 font-bold text-center
                md:text-left md:text-6xl">
                RichField Farm & smoke House LTD
            </motion.h1>
            <motion.p 
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0, transition: {delay: 0.4, duration: 0.5}}}
            viewport={{once: true, amount: .4}}
            
            className="max-w-lg text-center text-slate-600
            md:text-left">
            Dive into our fish farm, where every ripple tells a a story of fresh fish, 
            flavorful fish raised with care, feeding families and futures
            </motion.p>
            <div className="flex justify-center md:justify-start">
                <a href="#" className="py-4 px-12 text-white bg-green-500
             rounded-full hover:bg-green-400">Get Started</a>
            </div>
        </div>
        <div className="md:w-1/2">
            <img src="src/assets/home.png" alt="" />
        </div>
    </div>

  <div className='mt-24'>
      <motion.div 
         initial={{opacity: 0, y: 50}}
         whileInView={{opacity: 1, y: 0, transition: {delay: 0.5, duration: 0.3}}}
         viewport={{once: true, amount: .4}}
      className="text-center py-12">
        <h4 className='uppercase text-2xl font-bold text-slate-800 md:text-3xl'
        >Services</h4>
        <h1 className="text-4xl font-bold py-2 text-slate-800"
        > Why Choose Us?</h1>
    </motion.div>

    {/* Cards */}
    <div className='parent-card'>
      <div className="child-card grid md:grid-cols-3 lg:grid-cols-4">
      
      <Card 
        name='Fresh Fishes' 
        image='src/assets/fish.png'
        text='Our fish are caught daily by trusted local fishermen and transported with care to ensure they reach 
          you in peak condition'
      />

      <Card name='Fresh Fruits' 
        image='src/assets/fruit2.png'
        text='Our fruits are picked at the peak of ripeness from trusted local farms, ensuring they are 
          packed with natural sweetness and nutrition  '
      />

      <Card name='Everything you need in one place' 
        image='src/assets/orange.png'
        text='Manage, communicate, store files, track tasks and share documents.
          We offer an all-in-one team productivity solution.'
      />

      <Card name='Variety and Quality' 
        // image=''
        text='Our commitment to excellence ensures that every item you purchase 
          is of the highest standard, from our fresh fish and vegetables to our seasonal specialties.'
      />
      
      </div>
    </div>
  </div>

  <motion.div 
  initial={{opacity: 0, y: 50}}
  whileInView={{opacity: 1, y: 0, transition: {delay: 0.4, duration: 0.5}}}
  viewport={{once: false, amount: .5}}
  
  className="lg:mx-24 mt-24">
    <div className="flex flex-col md:space-y-12 md:flex-row">
      {/*  left */}
      <div className="md:w-1/2">
          <img src="src/assets/fruit2.png" alt="fresh_fruits" />
      </div>
      {/*  right  */}
      <div className="text-center py-12 md:w-1/2">
          <h1 className="text-4xl font-bold py-2 text-slate-800">
              We Produce Organic Food For Your Family
          </h1>
          <p className="py-6 text-slate-800 md:px-0 px-4">
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Praesentium ea quis 
              dolorum sapiente ab aliquid, ipsa dicta 
              minima assumenda delectus suscipit nesciunt 
              iusto corporis. Ipsam aperiam repellat labore 
              reprehenderit minus!
          </p>
          <div className="flex justify-center py-6">
              <a href="#" className="p-3 px-6 text-white bg-green-500
            rounded-full hover:bg-green-400">Read More</a>
          </div>
      </div>
    </div>
    </motion.div>

       {/* Testimonials */}
       <div className='mt-24'>
      <div className='lg:mx-24 text-center'>
        <p className='uppercase font-bold text-green-600 py-4'>Testimonial</p>
        <h2 className="text-4xl font-bold px-4 text-slate-800">
          What Our Satisfied Customers Say
        </h2>

    <div className='grid md:grid-cols-3 space-x-4 scroll-container'>
      <Testimonial 
        userName='Jane Doe'
        userPic='src/assets/profilepic01.jpg'
      />

      <Testimonial 
        userName='Jose Rodrygo' 
        userPic='src/assets/profilepic02.jpg'
      />
      <Testimonial 
        userName='Martha Biggs' 
        userPic='src/assets/profilepic01.jpg'
      />
    </div>
    
    </div>
    </div> 
  </section>
  )
}


export default Home