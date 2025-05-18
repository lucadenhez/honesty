export default function TitleCard({ make, model, year, mileage, transmission, motor, LCI, color }) {
    var formattedMiles = new Intl.NumberFormat('en-US').format(mileage);
    mileage = formattedMiles;

    return (
        <div className="space-y-2">
            <h1 className='text-2xl lg:text-3xl font-semibold'>{`${make} ${model}`}</h1>
            <div className="flex lg:flex-row flex-col gap-x-1 gap-y-1 lg:items-center">
                <div className="flex flex-row gap-x-1 items-center">
                    <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-md font-medium text-indigo-600 ring-1 ring-indigo-500/10 ring-inset">{year}</span>
                    <span className="inline-flex items-center rounded-md bg-[#f4f3e1] px-2 py-1 text-md font-medium text-[#616055] ring-1 ring-[#e5e4d3] ring-inset">{color}</span>
                    <span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-1 text-md font-medium text-emerald-600 ring-1 ring-emerald-600/10 ring-inset">{`${mileage} miles`}</span>
                </div>
                <div className="flex flex-row gap-x-1 items-center">
                    <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-md font-medium text-yellow-600 ring-1 ring-yellow-500/10 ring-inset">{motor}</span>
                    <span className="inline-flex items-center rounded-md bg-lime-50 px-2 py-1 text-md font-medium text-lime-600 ring-1 ring-lime-500/10 ring-inset">{transmission}</span>
                    <span className="inline-flex items-center rounded-md bg-orange-50 px-2 py-1 text-md font-medium text-orange-600 ring-1 ring-orange-500/10 ring-inset">{LCI ? "LCI" : "PRE LCI"}</span>
                </div>
            </div>
        </div>

    );
}