import './index.css'
import { IoIosSend } from "react-icons/io";

const LandingNewsletter = () => {

    return (
        <div className='flex flex-col py-24 items-center w-full px-[5%] gap-4'>
            <h5 data-aos-duration='700' data-aos='fade-up' data-aos-delay='100' className='text-primary'>Newsletter</h5>
            <p data-aos-duration='700' data-aos='fade-up' data-aos-delay='200' className='text-lg text-center font-manrope'>Subscribe for regular updates and news</p>
            <form data-aos-duration='700' data-aos='fade-up' data-aos-delay='300' className='flex mt-4 overflow-hidden border border-r-0 rounded-full'>
                <input className='px-4 py-3 text-lg outline-none md:px-8 md:py-4 font-manrope' placeholder='Enter your email' type="text" />
                <button className='md:px-10 px-5 hover:brightness-[1.1] duration-300 text-white rounded-full bg-primary font-manrope border-r border' type="submit" ><IoIosSend size={30} /></button>
            </form>
        </div >
    )
}

export default LandingNewsletter