import { format, formatDuration, intervalToDuration } from "date-fns";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import IconLink from "./IconLink";
import PhotoCarousel from "./PhotoCarousel";

const urgencyCodes = {
    "essential": "#519c5a",
    "wear & tear": "#518e9c",
};

export default function ServiceEntry({ title, description, timestamp, images, pricing, hours, links, urgency }) {
    let totalCost = 0.00;

    for (var i = 0; i < pricing.length; i++) {
        totalCost += pricing[i].price;
    }

    return (
        <Disclosure as="div" defaultOpen={false} className="p-5 mb-1 rounded-xl bg-gray-100 ">
            <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="pr-4 text-sm font-medium text-left lg:leading-[1.15rem] leading-4 text-black group-data-[hover]:text-black/80">{title}</span>
                <div className="flex items-center gap-x-5 justify-end">
                    <div className="flex lg:flex-row flex-col-reverse items-center gap-x-5 gap-y-2">
                        <div className="uppercase px-2 py-1 w-fit h-fit text-white font-bold rounded-md text-xs text-left lg:leading-[1.15rem] leading-4"
                            style={{ backgroundColor: urgencyCodes[urgency] }}
                        >{urgency}</div>
                        <span className="text-sm font-medium lg:leading-[1.15rem] leading-4 text-black group-data-[hover]:text-black/80">{format(timestamp, "MM.dd.yyyy")}</span>
                    </div>
                    <img src="/icons/chevron.svg" alt="Close Dropdown" width={20} height={20} className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                </div>
            </DisclosureButton>
            <DisclosurePanel transition className="whitespace-pre-line leading-[1.15rem] origin-top transition duration-500 ease-in-out  data-[closed]:opacity-0 mt-2 text-sm/5 text-gray-700">
                <div className="pb-10 ">
                    <h1 className="uppercase text-md font-bold text-gray-500 pb-2 pt-5">Description</h1>
                    {description}
                    <h1 className="uppercase text-md font-bold text-gray-500 pb-2 pt-5">Parts Breakdown</h1>
                    {pricing.map((part =>
                        <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between w-full lg:mb-1 mb-3">
                            <p>${part.price.toFixed(2)}</p>
                            <p>{part.name}</p>
                            <IconLink target="_blank" href={part.URL} title={part.source} />
                        </div>
                    ))}
                </div>
                <div className="flex justify-center w-full">
                    <div className="w-2/3">
                        <PhotoCarousel images={images} />
                    </div>
                </div>
                <div className="flex justify-between items-center pt-10">
                    <div>
                        <h1 className="uppercase text-md font-bold text-gray-500">Total Cost</h1>
                        <h1 className="uppercase text-xl font-semibold text-black">${totalCost.toFixed(2)}</h1>
                    </div>
                    <div>
                        <h1 className="text-right uppercase text-md font-bold text-gray-500">Duration</h1>
                        <h1 className="uppercase text-xl font-semibold text-black">{formatDuration(intervalToDuration({
                            start: 0,
                            end: hours * 60 * 60 * 1000
                        }), { format: ['days', 'hours'] })}</h1>
                    </div>
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}
