
import { BellRing, Check } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "./ui/separator"

interface facility{
    title:string
}

interface PriceCardProps{
    title:string,
    description:string,
    facilities: facility[],
    className?: string
    price:string
}

const PriceCard:React.FC<PriceCardProps> = ({
    title,
    description,
    className,
    facilities,
    price
}) => {
    return ( 
        <Card className={
            cn("w-[300px]",className)
        }>
            <CardHeader>
                <CardTitle className="text-3xl">
                    {title}
                </CardTitle>
                <CardDescription className="text-xl">
                    {description}
                </CardDescription>
               <div className="mt-5">
               <CardContent className="grid gap-4 mt-4">
                <div >
                  {facilities.map((facility, index) => (
                    <div
                      key={index}
                      className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                    >
                      <span className="flex h-2 w-2 translate-y-1 rounded-full bg-teal-900" />
                      <div className="space-y-1">
                        <p className="text-lg font-medium leading-none ">
                          {facility.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
          
                </CardContent>
               </div>
            </CardHeader>
            <CardFooter>
                <p className="text-2xl font-sans font-semibold">
                    ${price}/month
                </p>
      </CardFooter>

        </Card>
     );
}
 
export default PriceCard;