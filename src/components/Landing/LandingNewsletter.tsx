import './index.css'
import { IoIosSend } from "react-icons/io";

const LandingNewsletter = () => {
    return (
        <div data-aos='fade-up' data-aos-delay='300' className='flex flex-col py-20 mt-4 items-center w-full px-[5%] gap-4'>
            <h5 className='text-primary'>Newsletter</h5>
            <p className='text-lg text-center font-manrope'>20 Years of Excellence in Client-Oriented Infrastructure Solutions</p>
            <form className='flex mt-4 overflow-hidden border border-r-0 border-black rounded-full'>
                <input className='px-8 py-4 text-lg outline-none font-manrope' placeholder='Enter your email' type="text" />
                <button className='px-10 hover:brightness-[1.1] duration-300 text-white rounded-full bg-primary font-manrope border-r border-black' type="submit" ><IoIosSend size={30} /></button>
            </form>
        </div>
    )
}

export default LandingNewsletter