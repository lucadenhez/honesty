import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import IconLink from "./IconLink";
import PhotoCarousel from "./PhotoCarousel";


const categoryCodes = {
    "suspension": "#cc6ac1",
    "engine": "#c94242",
    "exterior": "#fcba03",
    "interior": "#44c98b",
};

export default function ModificationEntry({ title, description, images, msrp, purchasedPrice, category }) {
    return (
        <Disclosure as="div" defaultOpen={false} className="p-5 mb-1 rounded-xl bg-gray-100 ">
            <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="pr-4 text-sm font-medium text-left lg:leading-[1.15rem] leading-4 text-black group-data-[hover]:text-black/80">{title}</span>
                <div className="flex items-center gap-x-5 justify-end">
                    <div className="flex lg:flex-row flex-col-reverse items-center gap-x-5 gap-y-2">
                        <div className="uppercase px-2 py-1 w-fit h-fit text-white font-bold rounded-md text-xs text-left lg:leading-[1.15rem] leading-4"
                            style={{ backgroundColor: categoryCodes[category] }}
                        >{category}</div>
                    </div>
                    <img src="/icons/chevron.svg" alt="Close Dropdown" width={20} height={20} className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                </div>
            </DisclosureButton>
            <DisclosurePanel transition className="whitespace-pre-line leading-[1.15rem] origin-top transition duration-500 ease-in-out  data-[closed]:opacity-0 mt-2 text-sm/5 text-gray-700">
                <div className="pb-10 ">
                    <h1 className="uppercase text-md font-bold text-gray-500 pb-2 pt-5">Description</h1>
                    {description}
                </div>
                <div className="flex justify-center w-full">
                    <div className="lg:w-2/3 w-full">
                        <PhotoCarousel images={images} />
                    </div>
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}
