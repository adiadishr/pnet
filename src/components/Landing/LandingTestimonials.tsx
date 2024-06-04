import testimonial1 from '../../assets/testimonial.png'
import { IoMdQuote } from "react-icons/io";

const LandingTestimonials = () => {
    return (
        <div className="w-full flex px-[5%] min-h-[80vh] items-center justify-center">
            <div className='flex w-2/3 gap-12'>
                <img src={testimonial1} className='rounded-br-[4rem] size-36' alt="" />
                <div className='flex flex-col gap-4'>
                    <IoMdQuote className='text-4xl text-primary' />
                    <p className='font-manrope text-lg'>PNet team has been <strong>instrumental</strong> in Phil’s growth so far. Their talent pool has been exceptional and a lot of credit goes to Leapfrog’s high quality focus on training and onboarding. We never had to worry about a new engineer joining the team and becoming productive within a few weeks if not days.</p>
                </div>
            </div>
        </div>
    )
}

export default LandingTestimonials