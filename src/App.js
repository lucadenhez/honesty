import './App.css';

import TitleCard from './components/TitleCard';
import CarPreview from './components/CarPreview';
import Card from './components/Card';
import PhotoCarousel from './components/PhotoCarousel';
import ServiceHistory from './components/ServiceHistory';
import ModificationHistory from './components/ModificationHistory';
import PricingInformation from './components/PricingInformation';

import { useRef } from 'react';


function App() {
  const contentRef = useRef(null);

  return (
    <div ref={contentRef} className='mx-4 sm:mx-20 md:mx-[3rem] lg:mx-[12rem] space-y-3'>
      <header className='pt-5 lg:pt-10 md:pt-10 sm:pt-10'>
        <Card>
          <div className='bg-white rounded-lg flex flex-grow justify-between basis-full lg:flex-row flex-col w-full gap-x-3 gap-y-3'>
            <TitleCard
              make={"Mini"}
              model={"Cooper S"}
              year={2011}
              mileage={113000}
              motor={"N18 1.6T"}
              transmission={"6MT"}
              LCI={true}
              color={"Pepper White"}
            />
            <PricingInformation />
          </div>
        </Card>

      </header >
      <div className='flex flex-grow basis-full lg:flex-row flex-col w-full gap-x-3 gap-y-3'>
        <Card title={"Photos"} width={"half"}>
          <PhotoCarousel images={[
            "images/home/0.jpg",
            "images/home/1.jpg",
            "images/home/2.jpg",
            "images/home/3.jpg",
            "images/home/4.jpg",
            "images/home/5.jpg",
            "images/home/6.jpg",
            "images/home/7.jpg",
            "images/home/8.jpg",
            "images/home/9.jpg",
            "images/home/10.jpg",
            "images/home/11.jpg",
          ]} />
        </Card>
        <Card title={"LIDAR Scan"} width={"half"}>
          <CarPreview modelPath="models/R56.glb" hdriPath="hdri/skylit_garage_4k.hdr" />
        </Card>
      </div>

      <Card title={"Service History"}>
        <div className='py-12 space-y-2 flex flex-col items-center justify-center'>
          <h1 className='font-medium text-sm text-gray-500 leading-6 text-center'>
            <span className="bg-[#e64242] inline my-2 mr-2 uppercase px-2 py-1 w-fit h-fit text-white font-bold rounded-md text-xs text-left lg:leading-[1.15rem] leading-4">Essential</span>
            means that this is a larger repair expected by MINI at a certain mileage. Having this already repaired <b className='text-black'>saves you lots of money</b> in the long run.</h1>
          <h1 className='font-medium text-sm text-gray-500 leading-6 text-center'>
            <span className="bg-[#f9a927] inline my-2 mr-2 uppercase px-2 py-1 w-fit h-fit text-white font-bold rounded-md text-xs text-left lg:leading-[1.15rem] leading-4">Wear</span>
            means smaller repairs that are expected as the car ages. These aren't typically very expensive.</h1>
        </div>
        <ServiceHistory />
        <div className='flex justify-center w-full h-[150px] items-center'>
          <h1 className='font-medium text-md text-center text-gray-500'>No problems since purchase on October 25th, 2023.</h1>
        </div>
      </Card>

      <Card title={"Modifications"}>
        <ModificationHistory />
      </Card>

      <div className='h-[200px]' />

      <footer className='pb-10'>
        <div className='flex lg:flex-row flex-col gap-2 justify-center items-center w-full text-sm text-gray-500'>
          <p className='w-fit px-3 py-2 rounded-xl bg-white text-black'>Created by Luca Denhez</p>
          <a target='_blank' href="https://github.com/lucadenhez/honesty" className='hover:opacity-80 transition-opacity duration-200 ease-in-out'>
            <p className='w-fit px-3 py-2 rounded-xl bg-black text-white'>View this project on Github</p>
          </a>
        </div>
      </footer>
    </div >
  );
}

export default App;
