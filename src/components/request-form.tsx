import { Button } from "./ui/button";
import { Input } from "./ui/input";


const RequestForm = () => {
    return ( 
        <div className="md:ml-20 md:mr-20 ml-3 mr-3 text-white flex w-full md:h-[300px] h-[700px] flex-wrap md:mt-0 mt-10">
            <div className="md:w-1/2 md:h-full w-full h-[200px] flex justify-start items-center">
                <div className="flex flex-col mt-5">
                    <p className="text-lg">
                        Call To Action
                    </p>
                    <p className="text-4xl font-bold">
                        Get A Free Finance Consultanct
                    </p>
                    <p className="text-sm mt-5 m-1">
                        Media leadership skills before cross-media innovation testing <br />
                        develop standardized platforms without
                    </p>
                </div>
            </div>
            <div className="md:w-1/2 md:h-full w-full h-[100px]  flex justify-center items-center flex-col">
                <div className="flex flex-wrap">
                <Input className="bg-white text-black w-30 md:mt-0 mt-2 mr-2 rounded-lg" placeholder="Your Name"/>
                <Input className="bg-white text-black w-30 md:mt-0 mt-2" placeholder="Your Name"/>
                </div>
                <div className="flex flex-wrap md:mt-4">
                    <Input className="bg-white text-black w-30 mr-5 rounded-lg md:mt-0 mt-2" placeholder="Phone Number"/>
                    <Button className="bg-teal-600 w-50 md:mt-0 mt-2">
                        Request Call Back
                    </Button>
                </div>
            </div>
        </div>
     );
}
 
export default RequestForm;