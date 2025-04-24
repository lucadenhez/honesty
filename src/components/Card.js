export default function Card({ title, children, width }) {
    if (width === "half") {
        return (
            <div className="w-full max-w-none lg:max-w-[50vw] max-h-fit bg-white rounded-xl border-2 border-gray-200 shadow-sm">
                <div className='p-5'>
                    <h1 className='text-md font-semibold pb-5'>{title}</h1>
                    {children}
                </div>
            </div>
        );
    }
    if (width === "third") {
        return (
            <div className="w-full max-w-none lg:max-w-[33vw] max-h-fit bg-white rounded-xl border-2 border-gray-200 shadow-sm">
                <div className='p-5'>
                    <h1 className='text-md font-semibold pb-5'>{title}</h1>
                    {children}
                </div>
            </div>
        );
    }

    return (
        <div className="w-full max-h-fit bg-white rounded-xl border-2 border-gray-200 shadow-sm">
            <div className='p-5'>
                <h1 className='text-md font-semibold pb-5'>{title}</h1>
                {children}
            </div>
        </div>
    );
}
