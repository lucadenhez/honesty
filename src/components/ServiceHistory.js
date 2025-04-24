import ServiceEntry from "./ServiceEntry";
import { parse } from 'date-fns';

export default function ServiceHistory() {
    return (
        <>
            <ServiceEntry
                title="Replaced turbocharger"
                description={
                    `Factory turbocharger failed at 118K miles with the compressor wheel seizing.\n
                Upon removal, I found that some ...idiot... had installed the incorrect size banjo bolts for the oil feed line, underfeeding the turbo oil for however long.\n
                I replaced the turbo with another factory N18 turbo, with 78K miles, zero shaft play, from ALLMAG Auto Parts in Florida. Replaced all crush washers, flanges, and seals with OEM parts.\n
                Runs great and is properly oiled now. Should last a long time!`
                }
                timestamp={parse("04.21.2025", "MM.dd.yyyy", new Date())} // Temporary timestamp addition before official picker
                urgency="essential"
                pricing={[
                    {
                        price: 375.38,
                        name: 'N18 OEM Turbocharger (78K miles)',
                        source: 'ALLMAG Auto Parts',
                        URL: 'https://www.allmagautoparts.com/'
                    },
                    {
                        price: 61.90,
                        name: 'Oil Feed Line (Braided, new crush washers)',
                        source: 'Detroit Tuned',
                        URL: 'https://www.detroittuned.com/detroit-tuned-turbo-oil-line/'
                    },
                    {
                        price: 115.60,
                        name: 'Turbo gaskets, flanges, crush washers, etc.',
                        source: 'FCP Euro',
                        URL: 'https://www.fcpeuro.com/'
                    },
                    {
                        price: 35.00,
                        name: 'Oil Filter Housing Gasket',
                        source: 'FCP Euro',
                        URL: 'https://www.fcpeuro.com/'
                    },
                ]}
                images={[
                    "images/services/04.21.2025/turbo.jpeg",
                    "images/services/04.21.2025/exhaust_ports.jpeg",
                    "images/services/04.21.2025/front_end.jpeg",
                ]}
                hours={24*2}
                info="The turbocharger was given to the Mini Cooper S and Mini Cooper JCW starting in the second generation. This gives the car 60 more horsepower, and lots of lovely noises. The car cannot be driven with a broken turbocharger."
                link="https://www.carwow.co.uk/guides/glossary/how-turbos-work-superchargers-explained"
            />

            <ServiceEntry
                title="Replaced timing chain, exhaust VANOS sprocket"
                description={
                    `Exhaust VANOS gear failed and threw a code, putting the car in limp mode anytime the ECU requested exhaust timing to be advanced or retarded.\n
                    Replaced timing chain assembly along with the gear, new chain, guides, torque to yield fasteners, rear main seal.\n
                    After installation, reset VANOS adaptations with ISTA. Luckily no more codes or limp mode!`
                }
                timestamp={parse("03.13.2025", "MM.dd.yyyy", new Date())} // Temporary timestamp addition before official picker
                urgency="essential"
                pricing={[
                    {
                        price: 233.00,
                        name: 'N18 Timing Chain Kit',
                        source: 'ECS Tuning',
                        URL: 'https://www.ecstuning.com/b-assembled-by-ecs-parts/timing-chain-kit/11311439853kt2/'
                    },
                    {
                        price: 129.00,
                        name: 'N18 Schwaben Timing Chain Tool Kit',
                        source: 'ECS Tuning & Schwaben',
                        URL: 'https://www.ecstuning.com/b-schwaben-parts/schwaben-timing-chain-tool-kit-n18/026421sch01a/'
                    },
                    {
                        price: 178.99,
                        name: 'Mini Exhaust VANOS Camshaft Sprocket',
                        source: 'FCP Euro & Febi Bilstein',
                        URL: 'https://www.fcpeuro.com/products/mini-timing-chain-sprocket-febi-bilstein-11367536085?gQT=2'
                    },
                ]}
                images={[
                    "images/services/03.13.2025/head.jpeg",
                    "images/services/03.13.2025/timing_chain.jpeg",
                    "images/services/03.13.2025/vanos_gear.jpeg",
                ]}
                hours={24*3}
                info="The N18 engine has a system called VANOS on both the intake and exhaust side. This is variable valve timing (VVT), which means each camshaft can advance and retard with oil pressure. If the camshaft sprocket fails, the VANOS will not be able to change timing."
                link="https://bimmers.com/blog/bmw-vanos-explained-what-it-does-why-it-fails-and-how-to-fix-it/"
            />

            <ServiceEntry
                title="Replaced valve cover"
                description={
                    `PCV diaphragm built into valve cover started leaking and created a vacuum leak, causing rough cold starts.\n
                    Replacing the cover with a fresh one, new gaskets, and RTV on the pinch edges fixed the problem.\n
                    Zero rough cold starts after fix! `
                }
                timestamp={parse("01.18.2025", "MM.dd.yyyy", new Date())} // Temporary timestamp addition before official picker
                urgency="wear & tear"
                pricing={[
                    {
                        price: 469.99,
                        name: 'OEM N18 Valve Cover',
                        source: 'ECS Tuning & MINI',
                        URL: 'https://www.ecstuning.com/b-genuine-mini-parts/valve-cover/11127646552/'
                    },
                ]}
                images={[
                    "images/services/01.18.2025/head.jpeg",
                ]}
                hours={2}
                info="The valve cover has an integrated PCV diaphgram, which is what regulates the pressure in the crankcase. A failing valve cover will allow unmetered air into the crankcase, upsetting the pressure and caughing rough idle, cold start, etc."
                link="https://www.drivensd.com/post/bmw-valve-covers-and-valve-cover-gaskets-and-crankcase-ventilation-pcv"
            />

            <ServiceEntry
                title="Replaced valve stem seals"
                description={
                    `Was burning lots of oil after starting from stops, with smelly blue smoke out the exhaust.\n
                    Replaced the valve stem seals by pulling the cams and valve springs, replacing all sixteen seals with Mahle seals.\n
                    Zero smoking after replacement!`
                }
                timestamp={parse("06.25.2024", "MM.dd.yyyy", new Date())} // Temporary timestamp addition before official picker
                urgency="wear & tear"
                pricing={[
                    {
                        price: 31.29,
                        name: 'Mahle Valve Stem Seals',
                        source: 'Mahle',
                        URL: 'https://www.amazon.com/MAHLE-Original-SS46073-Engine-Valve/dp/B01GAHO79Q'
                    },
                    {
                        price: 51.95,
                        name: 'Generic valve spring compressor tool',
                        source: 'Amazon',
                        URL: 'https://www.amazon.com/DAYUAN-Cylinder-Service-Compressor-Installer/dp/B07SPL35XW/ref=sr_1_6?crid=9XIEOF6X4UK3&dib=eyJ2IjoiMSJ9._5jBr78pR_3bPfQJMCzh0dd0FmFCDW_Z8whdMwjGbic18W6tmGbfwVvlq-sgnBBDZzvGaK607F3whSCUZwWEsaAyO8DpAc_dgEaXqBbD5bw5AC0_t1lf2aCvY_vEyEfKBJD32IUapJ6wo5X-ecj0H7jvx11nBIA7Ernpvif3vM_djX0p_fAWqMI81fthWd1IRaH1WlanbYPEfYcMdLbxn2BoIOFFB5nn7UEt5NlZqx2_fVGh_u21nQrIFvFxP_Nfv-WOhPtoeANiyLdAVGKH-ASGWfhbDp2YbVSe6sjAbvM.QgCjMLq-9bN4UY9_MfSH59CtLGN11nTd3YRfpIWL8jw&dib_tag=se&keywords=valve+spring+compressor+bar&qid=1745473447&sprefix=valve+spring+compressor+ba%2Caps%2C156&sr=8-6'
                    },
                    {
                        price: 159.99,
                        name: 'Valvetronic spring compressor tool',
                        source: 'Amazon',
                        URL: 'https://www.amazon.com/Pressure-Installer-Remover-Disassembly-Intermediate/dp/B082DZRC7Z/ref=sr_1_5?crid=RCT26XLFZK6J&dib=eyJ2IjoiMSJ9.KWs2w_JXYHLUrrVTPrCAF6yZc-uHBYSk7PezZ-dULn_lfjiCKRawDcVdzh9MTdGMNZANPSkY9tc6Bi0s6hA9Klxmb4vDGN4GzGiA58K9Bi2H0JR8XCYoemAOVJ9ISnWOrHDmuW11gcgxOhqFCbJzb0hFmzhhzdZ4Y9FMRQ0ia9Jn2PN49g-VsG48wK_bjaqD4GoXF3lhgaQYiyFAyWdgo9bX-NghJpPbR4tCw8hzrIuNUVKn1LU6AikbvmmgPcpMEfgRfYTP2mGKvsyeSPQ6kXK_jRZB3usfEq3qrZRd6hc.TmxhKyz9qLMabSUzQp7odIj3NlCVa_5F-5Zm3q1NeJs&dib_tag=se&keywords=n18%2Bvalvetronic%2Bspring%2Bcompressor%2Btool&qid=1745473494&sprefix=n18%2Bvalvetronic%2Bspring%2Bcompressor%2Btoo%2Caps%2C215&sr=8-5&th=1'
                    },
                ]}
                images={[
                    "images/services/06.25.2024/cams_out.jpg",
                    "images/services/06.25.2024/seals.jpg",
                    "images/services/06.25.2024/head.jpg",
                    "images/services/06.25.2024/timing.jpg",
                    "images/services/06.25.2024/car.jpg",
                    "images/services/06.25.2024/parts.jpg",
                ]}
                hours={24*5}
                info="Valve stem seals lubricate the valve guides which are in constant movement, while keeping oil from entering the combustion chamber. However, when these seals age from time and heat, they become hard and expand, allowing oil to drip down the stem, and enter the combustion chamber on the intake stroke. This burns oil, not good."
                link="https://www.carparts.com/blog/valve-stem-seals-guide-definition-types-signs-of-failure/"
            />

<ServiceEntry
                title="Replaced water pump, coolant crossover pipe"
                description={
                    `Water pump and coolant crossover pipe going to the thermostat failed and were leaking coolant onto the ground overnight, so replaced both with OEM replacements.\n
                    Replaced the pump, pulley, and crossover pipe. No more leaking and temps are perfect.`
                }
                timestamp={parse("06.13.2024", "MM.dd.yyyy", new Date())} // Temporary timestamp addition before official picker
                urgency="essential"
                pricing={[
                    {
                        price: 161.99,
                        name: 'OEM Water Pump',
                        source: 'ECS Tuning & MINI',
                        URL: 'https://www.ecstuning.com/b-genuine-mini-parts/water-pump/11517648827/'
                    },
                    {
                        price: 41.99,
                        name: 'Water Pump Pulley',
                        source: 'ECS Tuning & Dayco',
                        URL: 'https://www.ecstuning.com/b-dayco-parts/drive-wheel-for-water-pump/11517619020~day/'
                    },
                    {
                        price: 16.19,
                        name: 'Coolant Crossover Pipe',
                        source: 'ECS Tuning & Bremmen Parts',
                        URL: 'https://www.ecstuning.com/b-bremmen-parts/water-pipe-with-clip/11537589713~brp/'
                    },
                ]}
                images={[
                    "images/services/06.13.2024/water_pumps.jpg",
                    "images/services/06.13.2024/crossover_pipe.jpg",
                    "images/services/06.13.2024/pulleys.jpg",
                ]}
                hours={24*3}
                info="The water pump is what circulates coolant throughout the engine to keep it cool. The crossover pipe sends water from the water pump to the thermostat, to get distributed throughout various components. These parts often fail with time, due to their brittle plastic nature and constant movement."
                link="https://haynes.com/en-gb/tips-tutorials/what-is-water-pump-car"
            />
        </>
    );
}
