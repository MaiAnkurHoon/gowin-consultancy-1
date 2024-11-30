import { ThumbsUp } from "lucide-react";
import { Button } from "./ui/button";
import PriceCard from "./price-card";

const facilities=[
    {
      title:"Unlimited Services"
    },
    {
      title:"10+ Paid Plugins"
    },
    {
      title:"Woocomerce Support"
    },
    {
      title:"50+ WP theme"
    },
  
  ]
const facilities2 = [
  {
    title: "Unlimited Services"
  },
  {
    title: "20+ Paid Plugins"
  },
  {
    title: "Woocommerce Support"
  },
  {
    title: "100+ WP themes"
  },
  {
    title: "Priority Support"
  }
];
const RatePlans = () => {
    return ( 
        <div className="mt-20 md:ml-20 md:mr-20 ml-3 mr-3 md:h-[700px] h-[auto] flex flex-wrap">
            <div className="md:w-1/2 h-full flex items-center justify-start">
                <div className="flex flex-col">
                    <p className="text-sm text-teal-950 font-semibold">PRICING PLANS</p>
                    <p className="text-4xl text-teal-950 font-semibold font-sans ">
                        Choose the comfotable <br />
                        Pricing Plans for your <br />
                        Consultant Service
                    </p>
                    <p className="text-grey text-lg font-medium mt-4">
                        Continually plagiarize virtual web service home_two <br />
                        maximizing action items. Globally build consult
                    </p>
                    <div>

                    </div>
                    <Button
                        size="lg"
                         className="bg-teal-800 text-white rounded-full w-40 mt-20">
                           <ThumbsUp /> More About
                    </Button>
                </div>
            </div>
            <div className="flex flex-wrap">
                <PriceCard
            title="Starter Plan"
            description="Individual"
            facilities={facilities}
            className="bg-teal-100 rounded-xl h-[450px] mr-4 mt-40"
            price="19"
            />
                <PriceCard
            title="Bussiness Plan"
            description="Company"
            facilities={facilities2}
            className="bg-teal-100 rounded-xl h-[450px] mt-8 "
            price="39"
            />
            </div>
        </div>
     );
}
 
export default RatePlans;