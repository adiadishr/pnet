import testimonial1 from '../../assets/testimonial1.png'
import testimonial2 from '../../assets/testimonial2.png'
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
        <div className='w-full flex px-[5%] py-24 items-center justify-center'>
            <Carousel className='flex md:w-2/3'>
                <CarouselContent>
                    <CarouselItem>
                        <div className='flex flex-col gap-12 md:flex-row'>
                            <div className='flex justify-between w-full'>
                                <img src={testimonial1} className='rounded-br-[4rem] size-44' alt="" />
                                <div className='relative'>
                                    <p className='absolute mt-[11px] text-sm font-light -left-12 font-manrope md:hidden'>Swipe</p>
                                    <IoMdQuote className='flex text-5xl md:hidden text-primary' />
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <IoMdQuote className='hidden text-5xl md:flex text-primary' />
                                <p className='text-lg font-manrope'>PNet team has been <strong>instrumental</strong> in Phil’s growth so far. Their talent pool has been exceptional and a lot of credit goes to Leapfrog’s high quality focus on training and onboarding. We never had to worry about a new engineer joining the team and becoming productive within a few weeks if not days.</p>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-2xl font-semibold font-manrope text-primary'>Andre Johnson</p>
                                    <p className='text-base font-light font-manrope'>CEO of Laudio, recognized by Times New York</p>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className='flex flex-col gap-12 md:flex-row'>
                            <div className='flex justify-between w-full'>
                                <img src={testimonial2} className='rounded-br-[4rem] size-44' alt="" />
                                <div className='relative'>
                                    <p className='absolute mt-[11px] text-sm font-light -left-12 font-manrope md:hidden'>Swipe</p>
                                    <IoMdQuote className='flex text-5xl md:hidden text-primary' />
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <IoMdQuote className='hidden text-5xl md:flex text-primary' />
                                <p className='text-lg font-manrope'>PNet team has been <strong>instrumental</strong> in Phil’s growth so far. Their talent pool has been exceptional and a lot of credit goes to Leapfrog’s high quality focus on training and onboarding. We never had to worry about a new engineer joining the team and becoming productive within a few weeks if not days.</p>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-2xl font-semibold font-manrope text-primary'>Andre Johnson</p>
                                    <p className='text-base font-light font-manrope'>CEO of Laudio, recognized by Times New York</p>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className='hidden md:flex -left-28 border-primary hover:bg-primary hover:text-white ' />
                <CarouselNext className='hidden md:flex -right-28 border-primary hover:bg-primary hover:text-white' />
            </Carousel>


        </div>
    )
}

export default LandingTestimonials