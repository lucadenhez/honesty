import logo from './logo.svg';
import './App.css';
import TitleCard from './components/TitleCard';
import PrintButton from './components/PrintButton';
import CarPreview from './components/CarPreview';
import Card from './components/Card';
import PhotoCarousel from './components/PhotoCarousel';
import ServiceHistory from './components/ServiceHistory';


function App() {
  return (
    <div className='my-10 mx-4 sm:mx-20 md:mx-[10rem] lg:mx-[12rem] space-y-3'>
      <header>
        <div className='flex flex-row justify-between pb-5'>
          <TitleCard make={"Mini"} model={"Cooper S"} year={2011} mileage={113000} motor={"N18 1.6T"} transmission={"6MT"} LCI={true} color={"Pepper White"} />
          <div className='lg:inline-block hidden'>
            <PrintButton />
          </div>
        </div>
      </header>
      <div className='flex flex-grow basis-full lg:flex-row flex-col w-full gap-x-3 gap-y-3'>
        <Card title={"Photos"} width={"half"}>
          <PhotoCarousel images={[
            "images/home/IMG_0.jpeg"
          ]} />
        </Card>
        <Card title={"LIDAR Scan"} width={"half"}>
          <PhotoCarousel images={[
            "images/home/IMG_0.jpeg"
          ]} />
        </Card>
      </div>
      <Card title={"Service History"}>
        <div className='py-12 space-y-2 flex flex-col items-center justify-center'>
          <h1 className='font-medium text-sm text-gray-500 leading-6 text-center'>
            <span className="bg-[#519c5a] inline my-2 mr-2 uppercase px-2 py-1 w-fit h-fit text-white font-bold rounded-md text-xs text-left lg:leading-[1.15rem] leading-4">Essential</span>
            means that this is a larger repair expected by MINI at a certain mileage. Having this already repaired <b className='text-black'>saves you lots of money</b> in the long run.</h1>
          <h1 className='font-medium text-sm text-gray-500 leading-6 text-center'>
            <span className="bg-[#518e9c] inline my-2 mr-2 uppercase px-2 py-1 w-fit h-fit text-white font-bold rounded-md text-xs text-left lg:leading-[1.15rem] leading-4">Wear & Tear</span>
            means smaller repairs that are expected as the car ages. These aren't typically very expensive.</h1>
        </div>
        <ServiceHistory />
        <div className='flex justify-center w-full h-[150px] items-center'>
          <h1 className='font-medium text-md text-gray-500'>No problems since purchase on October 25th, 2023.</h1>
        </div>
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
