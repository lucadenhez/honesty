import { Field, Label, Switch } from '@headlessui/react'
import { useState, useEffect } from 'react';

export default function PricingInformation() {
    const [enabled, setEnabled] = useState(true);
    const [finalPrice, setFinalPrice] = useState(6500);

    const priceDelta = 1500;

    useEffect(() => {
        if (enabled) {
            setFinalPrice(finalPrice + priceDelta);
        } else {
            setFinalPrice(finalPrice - priceDelta);
        }
    }, [enabled]);

    return (
        <div className="flex flex-col items-end gap-2">
            <h1 className='font-semibold lg:text-3xl text-xl text-right'>${finalPrice} OBO</h1>
            <Field className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                    <Label className="grow text-sm lg:text-base">Include Aero Kit II</Label>
                    <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        defaultChecked
                        className="group flex h-6 w-12 shrink-0 rounded-full border-4 border-transparent bg-neutral-400 duration-100 ease-in-out transition-colors data-[checked]:bg-emerald-600"
                    >
                        <span
                            aria-hidden
                            className="pointer-events-none h-4 w-4 translate-x-0 rounded-full bg-white transition-transform group-data-[checked]:translate-x-6"
                        />
                    </Switch>
                </div>
            </Field>
        </div>
    );
}
