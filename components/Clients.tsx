"use client";
import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data/index'


const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
        <h1 className="heading mb-8">
         Kind Words From{" "} <br/>
            <span className="text-purple">Satisfied Clients</span>
        </h1>
        <div className="flex flex-col items-center max-lg:mt-10">
           <InfiniteMovingCards 
                items={testimonials}
                direction="right"
                speed="slow"
            />
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
                {companies.map(({id, img, name }) => (
                    <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
                        <img
                        src={img}
                        alt={name}
                        className="md:w-10 w-5"
                        />
                        <h1 className="md:w-24 w-20 text-lg mt-1">
                        {name}
                        </h1>
            
                    </div>
                ))}
            </div>
            </div>
    </section>
  )
}

export default Clients
