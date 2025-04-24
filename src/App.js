import logo from './logo.svg';
import './App.css';
import TitleCard from './components/TitleCard';
import ServiceDocsButton from './components/ServiceDocsButton';
import CarPreview from './components/CarPreview';
import Card from './components/Card';
import PhotoCarousel from './components/PhotoCarousel';
import ServiceEntry from './components/ServiceEntry';
import Loader from './components/Loader';
import ServiceHistory from './components/ServiceHistory';


function App() {
  return (
    <div className='my-10 mx-4 md:mx-10 space-y-3'>
      <header>
        <div className='flex flex-row justify-between pb-5'>
          <TitleCard make={"Mini"} model={"Cooper S"} year={2011} mileage={113000} motor={"N18 1.6T"} transmission={"6MT"} LCI={true} color={"Pepper White"} />
          <ServiceDocsButton />
        </div>
      </header>
      <div className='flex flex-grow basis-full md:flex-row flex-col w-full gap-x-3 gap-y-3'>
        <Card title={"Photos"} width={"half"}>
          <PhotoCarousel images={"images/home"} />
        </Card>
        <Card title={"LIDAR Scan"} width={"half"}>
          <CarPreview modelPath={"models/R56.glb"} hdriPath={"hdri/skylit_garage_4k.hdr"} />
        </Card>
      </div>
      <Card title={"Service History"}>
        <ServiceHistory />
      </Card>
      <div className='w-screen h-[200px]' />
      <footer>
        <div className='flex flex-row gap-x-2 justify-center w-full text-sm text-gray-500'>
          <p className='px-3 py-2 rounded-xl bg-white text-black'>Created by Luca Denhez</p>
          <a target='_blank' href="https://instagram.com/lucadenhez" className='hover:opacity-80 transition-opacity duration-200 ease-in-out'>
            <p className='px-3 py-2 rounded-xl bg-[#993e5c] text-white'>Instagram</p>
          </a>
          <a target='_blank' href="https://www.linkedin.com/in/lucadenhez" className='hover:opacity-80 transition-opacity duration-200 ease-in-out'>
            <p className='px-3 py-2 rounded-xl bg-[#2c5074] text-white'>Linkedin</p>
          </a>
        </div>
      </footer>
    </div>

  );
}

export default App;
