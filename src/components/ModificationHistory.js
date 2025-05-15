import ModificationEntry from "./ModificationEntry";


export default function ModificationHistory() {
    return (
        <>
            <ModificationEntry
                title="JCW Aero Kit II (Front bumper, sideskirts)"
                description={
                    `These are the performance aero kit bumpers sold by MINI created during the facelift, with integrated brake ducts and larger front spoiler.`
                }
                images={[
                    "images/modifications/jcw_aero_kit_1/0.jpeg",
                    "images/modifications/jcw_aero_kit_1/1.jpeg",
                    "images/modifications/jcw_aero_kit_1/2.jpeg",
                    "images/modifications/jcw_aero_kit_1/3.jpeg",
                    "images/modifications/jcw_aero_kit_1/4.jpeg",
                ]}
                category="exterior"
            />

            <ModificationEntry
                title="JCW Aero Kit II (Rear bumper), JCW GP2 Rear Diffuser, GTT UK Exhaust Tips"
                description={
                    `This is also part of the aero kit, with the additional OEM rear diffuser found on the MINI GP2 cars.
                    Handmade GTT 4" exhaust tips from the UK fill out the diffuser nicely. I will include the OEM exhaust tips as well. Just one set screw per tip, no welding.`
                }
                images={[
                    "images/modifications/jcw_aero_kit_2/0.jpeg",
                    "images/modifications/jcw_aero_kit_2/1.jpeg",
                    "images/modifications/jcw_aero_kit_2/2.jpeg",
                ]}
                category="exterior"
            />

            <ModificationEntry
                title="H&R Pro Street Coilovers"
                description={
                    `I really wanted to reduce understeer and lower the center of gravity of the car, so these H&R coilovers are perfect.
                    Surprisingly smooth ride on the street with no creaks, and is nice and firm on the track. I think it's the nature of the progressive springs.`
                }
                images={[
                    "images/modifications/coilovers/0.jpg",
                    "images/modifications/coilovers/1.jpg",
                    "images/modifications/coilovers/2.jpg",
                    "images/modifications/coilovers/3.jpg",
                    "images/modifications/coilovers/4.jpg",
                    "images/modifications/coilovers/5.jpg",
                    "images/modifications/coilovers/6.jpg",
                ]}
                category="suspension"
            />

            <ModificationEntry
                title="ECU Tune from Mario at mQubed Motorsports (Stage II)"
                description={
                    `Shipped the ECU to California for Mario at mQubed Motorsports to flash tune the car with a Stage II tune. Super lovely lad, and if you would like the tune removed it can be sent back to him to flash the OEM tune.
                    This tune introduced a linear throttle map, ~70 bhp increase, and medium burbles on the overrun with the sport button ON. With the button off, the car returns to a stock tune with no burbles.`
                }
                images={[
                    "images/modifications/mqubed_tune/0.jpeg",
                ]}
                category="engine"
            />

            <ModificationEntry
                title="Cravenspeed Short Shifter"
                description={
                    `Height-adjustable short throw shifter from Cravenspeed in Oregon. With a finger-adjustable screw on the collar of the shifter, you can raise or lower the shifter to give a shorter or farther throw.
                    Paired with the CS shift-well cover to replace the shift boot (I will include the boot) and the CS shifter retaining clip pro.`
                }
                images={[
                    "images/modifications/short_shifter/0.jpg",
                    "images/modifications/short_shifter/1.jpg",
                ]}
                category="interior"
            />

            <ModificationEntry
                title="CTS Turbo Intake"
                description={
                    `Aluminium charge pipe, dry cone filter, and silicone turbo inlet pipe. Quality piece with cold air fed from the cowl and some through the hood scoop.`
                }
                images={[
                    "images/modifications/cts_turbo_intake/0.jpeg",
                    "images/modifications/cts_turbo_intake/1.jpeg",
                ]}
                category="engine"
            />

            <ModificationEntry
                title="m7speed Oil Catch Can"
                description={
                    `Oil catch can filters oil in the PCV and reduces carbon buildup in the inlet ports.`
                }
                images={[
                    "images/modifications/m7speed_occ/0.jpeg",
                ]}
                category="engine"
            />

            <ModificationEntry
                title="Larger Intercooler"
                description={
                    `Larger intercooler as a prerequisite to the stage II tune.`
                }
                images={[
                    "images/modifications/intercooler/0.jpeg",
                    "images/modifications/intercooler/1.jpeg",
                ]}
                category="engine"
            />

            <ModificationEntry
                title="Downpipe (Catless)"
                description={
                    `Catless downpipe as a prerequisite to the Stage II tune.
                    I have the OEM catted downpipe as well, but in order to use it you need to de-flash the cars tune by sending it to Mario.`
                }
                images={[
                    "images/modifications/downpipe/0.jpeg",
                ]}
                category="engine"
            />
        </>
    );
}