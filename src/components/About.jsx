import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>
      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>
              Hi, I'm Satyam Sinha, a <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/satyam-sinha-0aa865341/' target='_blank' rel='noreferrer'>Backend & AI/ML Engineer</a> specializing in high-concurrency architectures and distributed systems. My core expertise lies in building resilient microservices using Go and Java Spring Boot, paired with engineering production-ready machine learning pipelines in Python.
              <br />
              ✍️ I thrive on solving complex scalability problems—whether that means architecting concurrent worker pools, integrating low-latency message brokers, or optimizing data pipelines for predictive models. Beyond the screen, I’m an avid motorcycling enthusiast, finding a parallel between fine-tuning high-performance machines on the road and writing clean, optimized code for production.
            </p>

            <ButtonLink
              url='https://drive.google.com/drive/folders/1fDAIkJKMMT9fKnKZnKXjqo2BFFv4nIFo?usp=sharing'
              text='View Resume →'
              padding={`p-3`}
            />

          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;
