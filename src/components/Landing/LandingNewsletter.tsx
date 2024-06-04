import './index.css'
import { IoIosSend } from "react-icons/io";

const LandingNewsletter = () => {
    return (
        <div className='flex flex-col py-24 items-center w-full px-[5%] gap-4'>
            <h5 data-aos-duration='700' data-aos='fade-up' data-aos-delay='300' className='text-primary'>Newsletter</h5>
            <p data-aos-duration='700' data-aos='fade-up' data-aos-delay='300' className='text-lg text-center font-manrope'>20 Years of Excellence in Client-Oriented Infrastructure Solutions</p>
            <form data-aos-duration='700' data-aos='fade-up' data-aos-delay='300' className='flex mt-4 overflow-hidden border border-r-0 border rounded-full'>
                <input className='px-8 py-4 text-lg outline-none font-manrope' placeholder='Enter your email' type="text" />
                <button className='px-10 hover:brightness-[1.1] duration-300 text-white rounded-full bg-primary font-manrope border-r border' type="submit" ><IoIosSend size={30} /></button>
            </form>
        </div >
    )
}

export default LandingNewsletter