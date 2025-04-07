export default function TitleCard({make, model, year, mileage, trimLevel, color}) {
    var formattedMiles = new Intl.NumberFormat('en-US').format(mileage);
    mileage = formattedMiles;

    return (
        <div className="space-y-2">
            <h1 className='text-3xl font-semibold'>{`${make} ${model}`}</h1>
            <div className="flex flex-row gap-x-1 items-center">
                <div className="px-2 w-fit h-fit bg-purple-200 rounded-md">{year}</div>
                <div className="px-2 w-fit h-fit text-white bg-[#e42f2f] rounded-md">{trimLevel}</div>
                <div className="px-2 w-fit h-fit bg-[#f4f3e1] rounded-md">{color}</div>
                <div className="px-2 w-fit h-fit bg-green-200 rounded-md">{`${mileage} miles`}</div>
            </div>
        </div>
        
    );
}