import React from 'react'
import image from '../images/paddle.jpg'


const Home = () => {
  return (
    <main>
      <img src={image} alt="paddleImage" className="absolute object-cover w-full" />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-12 px-8" >
        <h1 className="text-6xl text-black-100 font-bold cursive leading-none lg:leading-snug home-name">Hello. I'm Spencer</h1>
      </section>
    </main>
  )
}

export default Home
