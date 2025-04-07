import { useState } from 'react';
import { Description, Dialog, DialogPanel, DialogTitle, DialogBackdrop } from '@headlessui/react';

export default function ServiceDocsButton() {
    let [modalOpen, setModalOpen] = useState(false);

    function handleClick() {

    }

    return (
        <>
            <button onClick={() => setModalOpen(true)}
                className="w-14 h-14 rounded-xl bg-white border-2 border-gray-200 shadow-sm flex flex-col items-center justify-center"
            >
                <img src="/icons/documentation.svg" alt="Documentation" width={20} height={20} />
            </button>
            <Dialog open={modalOpen}
                onClose={() => setModalOpen(false)}
                className="relative z-50 transition duration-300 ease-out data-[closed]:opacity-0"
                transition
            >
                <DialogBackdrop className="fixed inset-0 backdrop-blur-sm" />
                <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
                    <DialogPanel className="max-w-[32rem] space-y-4 p-12 bg-white border-2 border-gray-200 rounded-xl shadow-lg">
                        <DialogTitle className="text-2xl font-semibold">Documentation</DialogTitle>
                        <Description className="text-md font-medium">Service documentation for your vehicle.</Description>
                    </DialogPanel>
                </div>

            </Dialog>
        </>

    );
}
