
import { useState } from "react";
import { Button } from "./ui/button";

import { Plus, X } from "lucide-react";
import { Dialog, DialogPanel } from "@headlessui/react";
import IconButton from "./icon-button";

const MobileNavbarView = () => {
    const [open, setOpen] = useState(false);
    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);
    return ( 
        <>
        <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        <Plus size={15} />
        </Button>
        <Dialog
        open={open}
        onClose={onClose}
        >

        {/* Background */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        {/* Dialog position */}
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            {/* close button */}
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>
            <div className="p-4">
            </div>
          </DialogPanel>
        </div>
      </Dialog>
        </>
     );
}
 
export default MobileNavbarView;