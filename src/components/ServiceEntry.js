import { format, compareAsc } from "date-fns";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import IconLink from "./IconLink";


export default function ServiceEntry({ title, description, timestamp, images, pricing, time, links, critical }) {
    console.log(timestamp);

    return (
        <Disclosure as="div" defaultOpen={false} className="p-5 mb-1 rounded-xl bg-gray-100">
            <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="pr-4 text-sm font-medium text-left md:leading-[1.15rem] leading-4 text-black group-data-[hover]:text-black/80">{title}</span>
                <div className="flex items-center gap-x-5 justify-end">
                    <div className="flex md:flex-row flex-col-reverse items-center gap-x-5 gap-y-2">
                        <div className="px-2 py-1 w-fit h-fit text-white font-bold bg-[#e13926] rounded-md text-xs text-left md:leading-[1.15rem] leading-4">CRITICAL</div>
                        <span className="text-sm font-medium md:leading-[1.15rem] leading-4 text-black group-data-[hover]:text-black/80">{format(timestamp, "dd.MM.yyyy")}</span>
                    </div>
                    <img src="/icons/chevron.svg" alt="Close Dropdown" width={20} height={20} className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                </div>
            </DisclosureButton>
            <DisclosurePanel transition className="whitespace-pre-line leading-[1.15rem] origin-top transition duration-500 ease-in-out  data-[closed]:opacity-0 mt-2 text-sm/5 text-gray-700">
                <h1 className="uppercase text-md font-bold text-gray-500 pb-2 pt-5">Description</h1>
                {description}
                <h1 className="uppercase text-md font-bold text-gray-500 pb-2 pt-5">Parts Breakdown</h1>
                {pricing.map((part =>
                    <div className="flex md:flex-row flex-col md:items-center items-start justify-between w-full md:mb-1 mb-3">
                        <p>${part.price.toFixed(2)}</p>
                        <p>{part.name}</p>
                        <IconLink target="_blank" href={part.URL} title={part.source} />
                    </div>
                ))}
            </DisclosurePanel>
        </Disclosure>
    );
}
