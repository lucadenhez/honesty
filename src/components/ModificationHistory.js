import ModificationEntry from "./ModificationEntry";
import { parse } from 'date-fns';


export default function ModificationHistory() {
    return (
        <>
            <ModificationEntry
                title="H&R Pro Street Coilovers"
                description={
                    `Factory turbocharger failed at 118K miles with the compressor wheel seizing.\n
                        Upon removal, I found that some ...idiot... had installed the incorrect size banjo bolts for the oil feed line, underfeeding the turbo oil for however long.\n
                        I replaced the turbo with another factory N18 turbo, with 78K miles, zero shaft play, from ALLMAG Auto Parts in Florida. Replaced all crush washers, flanges, and seals with OEM parts.\n
                        Runs great and is properly oiled now. Should last a long time!`
                }
                timestamp={parse("04.21.2025", "MM.dd.yyyy", new Date())} // Temporary timestamp addition before official picker
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
                hours={24 * 2}
                info="The turbocharger was given to the Mini Cooper S and Mini Cooper JCW starting in the second generation. This gives the car 60 more horsepower, and lots of lovely noises. The car cannot be driven with a broken turbocharger."
                link="https://www.carwow.co.uk/guides/glossary/how-turbos-work-superchargers-explained"
            />
        </>
    );
}