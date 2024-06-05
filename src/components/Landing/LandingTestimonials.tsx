import testimonial1 from '../../assets/testimonial.png'
import { IoMdQuote } from "react-icons/io";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"



const LandingTestimonials = () => {
    return (
        <div className='w-full flex px-[5%] min-h-screen items-center justify-center'>
            <Carousel className='flex w-2/3'>
                <CarouselContent>
                    <CarouselItem>
                        <div className='flex gap-12'>
                            <img src={testimonial1} className='rounded-br-[4rem] size-36' alt="" />
                            <div className='flex flex-col gap-4'>
                                <IoMdQuote className='text-5xl text-primary' />
                                <p className='font-manrope text-lg'>PNet team has been <strong>instrumental</strong> in Phil’s growth so far. Their talent pool has been exceptional and a lot of credit goes to Leapfrog’s high quality focus on training and onboarding. We never had to worry about a new engineer joining the team and becoming productive within a few weeks if not days.</p>
                                <div className='flex flex-col gap-1'>
                                    <p className='font-manrope text-2xl font-semibold text-primary'>Andre Johnson</p>
                                    <p className='font-manrope text-base font-light'>CEO of Laudio, recognized by Times New York</p>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className='flex gap-12'>
                            <img src={testimonial1} className='rounded-br-[4rem] size-36' alt="" />
                            <div className='flex flex-col gap-4'>
                                <IoMdQuote className='text-5xl text-primary' />
                                <p className='font-manrope text-lg'>PNet team has been <strong>instrumental</strong> in Phil’s growth so far. Their talent pool has been exceptional and a lot of credit goes to Leapfrog’s high quality focus on training and onboarding. We never had to worry about a new engineer joining the team and becoming productive within a few weeks if not days.</p>
                                <div className='flex flex-col gap-1'>
                                    <p className='font-manrope text-2xl font-semibold text-primary'>Andre Johnson</p>
                                    <p className='font-manrope text-base font-light'>CEO of Laudio, recognized by Times New York</p>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious  className='-left-24'/>
                <CarouselNext className='-right-24' />
            </Carousel>


        </div>
    )
}

export default LandingTestimonials