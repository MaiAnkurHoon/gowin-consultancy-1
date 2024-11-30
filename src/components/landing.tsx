import { Button } from "./ui/button";
import { ThumbsUp } from "lucide-react"

const Landings = () => {
    return ( 
        <div className="h-[80vh] w-full flex flex-wrap items-end">
              <div className="md:w-1/2 md:h-full h-[30vh] w-full flex justify-start items-center  ">
                <div className="flex flex-col md:ml-10 ">
                  <p className="md:text-5xl text-2xl font-semibold block font-sans">
                    Digital Finance Const &#x2e; <br />
                    Growing Bussiness
                  </p>
                  <p className="mt-5 md:text-lg text-sm font-sans">
                    Continually plagiarize virtual web service 
                    with home two maximizing<br /> action items &#x2e; Globally build
                    frontend
                  </p>
                  <div className="m-0 mt-4">
                    <Button
                    size="lg"
                    className="bg-teal-600 rounded-full text-sm"
                    >
                     <ThumbsUp className="mr-2"/> Get Started
                    </Button>
                  </div>
                </div>
                
              </div>
              <div className="md:w-1/2 md:h-full h-1/2 w-full flex justify-end items-end mb-0">
                <img
                  src="https://res.cloudinary.com/dsax8ghd0/image/upload/v1732962174/Untitled_design_iwj66b.png"
                  alt="Image"
                />
              </div>
            </div>
     );
}
 
export default Landings;