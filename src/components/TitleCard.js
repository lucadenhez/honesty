export default function TitleCard({ make, model, year, mileage, transmission, motor, LCI, color }) {
    var formattedMiles = new Intl.NumberFormat('en-US').format(mileage);
    mileage = formattedMiles;

    return (
        <div className="space-y-2">
            <h1 className='text-2xl lg:text-3xl font-semibold'>{`${make} ${model}`}</h1>
            <div className="flex lg:flex-row flex-col gap-x-1 gap-y-1 lg:items-center">
                <div className="flex flex-row gap-x-1 items-center">
                    <div className="px-2 w-fit h-fit bg-purple-200 rounded-md md:text-base text-xs">{year}</div>
                    <div className="px-2 w-fit h-fit bg-[#f4f3e1] rounded-md md:text-base text-xs">{color}</div>
                    <div className="px-2 w-fit h-fit bg-green-200 rounded-md md:text-base text-xs">{`${mileage} miles`}</div>
                </div>
                <div className="flex flex-row gap-x-1 items-center">
                    <div className="px-2 w-fit h-fit text-white bg-[#f66a6a] rounded-md md:text-base text-xs">{motor}</div>
                    <div className="px-2 w-fit h-fit text-white bg-[#fe9c2c] rounded-md md:text-base text-xs">{transmission}</div>
                    <div className="px-2 w-fit h-fit text-white bg-[#e42f2f] rounded-md md:text-base text-xs">{LCI ? "LCI" : "PRE LCI"}</div>
                </div>
            </div>
        </div>

    );
}