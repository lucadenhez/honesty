import { useLoader, Canvas } from '@react-three/fiber';
import { Environment, Html, OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense } from 'react';
import Loader from './Loader';


const Car = ({ modelPath }) => {
    const gltf = useLoader(GLTFLoader, modelPath);

    return (
        <>
            <primitive object={gltf.scene} scale={2.5} />
        </>
    );
};

const Ground = () => {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial color="black" />
        </mesh>
    );
};

export default function CarPreview({ modelPath, hdriPath }) {
    /*
<Environment files={ hdriPath } background />
    */
    return (
        <div className='w-full h-[50vh]'>
            <Canvas className='rounded-xl'>
                <Suspense fallback={<Loader />}>
                    <Car modelPath={modelPath} />


                    <OrbitControls />
                    <Environment preset="apartment" background="#000000"/>
                </Suspense>
            </Canvas>
        </div>
    );
}


