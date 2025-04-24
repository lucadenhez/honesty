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
                timestamp={parse("04.21.2024", "MM.dd.yyyy", new Date())} // Temporary timestamp addition before official picker
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
                hours={48}
            />

            <ServiceEntry
                title="Replaced timing chain, exhaust VANOS sprocket"
                description={
                    `Exhaust VANOS gear failed and threw a code, putting the car in limp mode anytime the ECU requested exhaust timing to be advanced or retarded.\n
                    Replaced timing chain assembly along with the gear, new chain, guides, torque to yield fasteners, rear main seal.\n
                    After installation, reset VANOS adaptations with ISTA. Luckily no more codes or limp mode!`
                }
                timestamp={parse("03.13.2024", "MM.dd.yyyy", new Date())} // Temporary timestamp addition before official picker
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
                    "images/services/03.13.24/head.jpeg",
                    "images/services/03.13.24/timing_chain.jpeg",
                    "images/services/03.13.24/vanos_gear.jpeg",
                ]}
                hours={72}
            />
        </>
    );
}
