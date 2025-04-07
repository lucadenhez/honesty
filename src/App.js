import logo from './logo.svg';
import './App.css';
import TitleCard from './components/TitleCard';
import ServiceDocsButton from './components/ServiceDocsButton';
import CarPreview from './components/CarPreview';

function App() {
  return (
    <div className='m-10 space-y-5'>
      <div className='flex flex-row justify-between'>
        <TitleCard make="Mini" model="Cooper S" year={2011} mileage={113000} trimLevel="JCW" color="Pepper White" />
        <ServiceDocsButton />
      </div>
      
      <div className='flex md:flex-row flex-col w-full h-screen gap-x-5 gap-y-5'>
        <div className="leftContainer md:w-[50vw] w-full max-h-fit bg-white rounded-xl border-2 border-gray-200 shadow-sm">
          <div className='p-5'>
            <h1 className='text-md font-semibold pb-5'>LIDAR Scan</h1>
            <CarPreview modelPath={ "models/R56.glb" } hdriPath={ "hdri/skylit_garage_4k.hdr" } />
          </div>
        </div>
        <div className="rightContainer md:w-[50vw] w-full h-20 bg-white rounded-xl border-2 border-gray-200 shadow-sm">
          
        </div>
      </div>
    </div>
  );
}

export default App;
