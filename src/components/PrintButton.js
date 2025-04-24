import { useState, useRef } from 'react';
import { Description, Dialog, DialogPanel, DialogTitle, DialogBackdrop } from '@headlessui/react';
import { useReactToPrint } from "react-to-print";
import generatePDF, { usePDF } from 'react-to-pdf';


export default function PrintButton({ contentRef }) {
    let [modalOpen, setModalOpen] = useState(false);
    const reactToPrintFn = useReactToPrint({ contentRef });

    /*
    <DialogBackdrop className="fixed inset-0 backdrop-blur-sm" />
    */

    return (
        <>
            <button onClick={() => setModalOpen(true)}
                className="w-14 h-14 rounded-xl bg-white border-2 border-gray-200 shadow-sm flex flex-col items-center justify-center"
            >
                <img src="/icons/printer.svg" alt="Documentation" width={25} height={25} />
            </button>
            <Dialog open={modalOpen}
                onClose={() => setModalOpen(false)}
                className="relative z-50 transition duration-200 ease-out data-[closed]:opacity-0"
                transition
            >
                <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
                    <DialogPanel className="max-w-[32rem] space-y-4 p-12 bg-white border-2 border-gray-200 rounded-xl shadow-lg">
                        <Description>
                            <div className='flex flex-col items-center gap-y-1'>
                                <button className='w-full px-5 py-3 bg-black text-white text-md font-medium rounded-xl'>
                                    <div onClick={() => generatePDF(contentRef, { filename: "Honesty Summary.pdf" })} className='flex items-center justify-center gap-x-3'>
                                        <p>Save to PDF</p>
                                        <img src="/icons/save.svg" alt="PDF" width={18} height={18} className='invert' />
                                    </div>
                                </button>
                                <button className='w-full px-5 py-3 bg-black text-white text-md font-medium rounded-xl'>
                                    <div onClick={() => reactToPrintFn()} className='flex items-center justify-center gap-x-3'>
                                        <p>Print</p>
                                        <img src="/icons/printer.svg" alt="Print" width={22} height={22} className='invert' />
                                    </div>
                                </button>
                            </div>
                        </Description>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    );
}
