import { Button } from "./ui/button";
import { ThumbsUp } from "lucide-react"
import { MoveUpRight } from "lucide-react"

const AboutUs = () => {
    return ( 
       <div className="mt-8">
        <p className="text-4xl font-semibold text-teal-600">
            About Us
        </p>
         <div className="flex flex-wrap mt-10">
            
            <div className="md:w-1/2 ">
                <img src="https://res.cloudinary.com/dsax8ghd0/image/upload/v1732967341/AGENCY_2024_FINANCE_CONSULT_znbyzo.png" alt="" />
            </div>
            <div className="md:w-1/2  flex justify-start items-center">
                <div className="flex flex-col">
                    <p className="text-lg text-teal-900 font-semibold">
                        Finance Consultancy
                    </p>
                    <p className="text-3xl font-bold text-teal-700">
                        The Best Finance Consultancy <br />
                        In World Since 2007
                    </p>
                    <p className="text-lg text-teal-900 font-semibold">
                        Globally engage cross-media leadership skills before cross-media <br />
                        innovation develop standardized platforms without robust application. <br />
                        Conveniently go forward <br />
                        collaboration and idea <br />
                        sharing
                    </p>

                    <div className="mt-7 flex">
                        <Button
                        size="lg"
                         className="bg-teal-800 text-white rounded-full">
                           <ThumbsUp /> More About
                        </Button>
                        <Button
                        size="lg"
                        className="text-lg"
                        >
                            Our Services 
                            <MoveUpRight
                            className="w-40 h-40"
                            />
                        </Button>
                    </div>
                </div>

            </div>
        </div>
       </div>
     );
}
 
export default AboutUs;