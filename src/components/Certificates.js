import React from "react";
import Footer from "./Footer";
import easyByts from '../assets/easy byts.jpg'
import jspiders from '../assets/jspiders.jpg'
import tcs from '../assets/tcs.jpg'

const CertificateCard = ({ image, title, description, link }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 sm:p-6">
                {/* <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5> */}
                <h5 className="text-xl sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img className="w-full rounded-t-lg h-auto object-cover" src={image} alt={title} />
            </a>
        </div>
    );
};

const Certificates = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {certificates.map((item, index) => (
                    <CertificateCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        link={item.link}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export const certificates = [
    {
        title: 'EazyByts Infotech internship',
        description: '',
        image: easyByts,
        link: 'https://drive.google.com/file/d/1Fhhel9TQFvPxCGlPoMhdfrh3xuuBsdBr/view?usp=sharing',
    },
    {
        title: 'TCS iON NQT - IT (2024)',
        description: '',
        image: tcs,
        link: 'https://drive.google.com/file/d/1Qh_e-xMDD9urewjLIIOW2e0-rPuABm3P/view?usp=sharing',
    },
    {
        title: 'Java full stack development',
        description: '',
        image: jspiders,
        link: 'https://drive.google.com/file/d/1Obdhk50zr-4UGOozf2NBsdzqvZ69F2IQ/view?usp=sharing',
    },
];

export default Certificates
