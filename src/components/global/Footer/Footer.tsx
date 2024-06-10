import { IoMailOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { FiPhone } from "react-icons/fi";
import logo from '../../../assets/logo.png'
import { FaArrowUp } from "react-icons/fa";
import { toTopSmooth } from "@/utilities/toTop";

const Footer = () => {
    return (
        
        <footer className="flex flex-col w-full px-[5%]">
            {/* Logo and go to top */}
            <div data-aos='fade-up' data-aos-once='true' data-aos-duration='700' data-aos-delay='100' className='flex justify-between w-full'>
                <img src={logo} className='flex w-max h-[90px]' alt="" />
                <div className='flex items-center gap-6'>
                    <h5 className='text-xl'>Go to top</h5>
                    <button onClick={toTopSmooth} className='p-5 text-sm font-bold text-white duration-300 rounded-full bg-primary hover:bg-primary/90'>
                        <FaArrowUp className='text-xl font-bold' />
                    </button>
                </div>
            </div>
            {/* Details */}
            <div data-aos='fade' data-aos-once='true' data-aos-duration='700' data-aos-delay='200' className='flex items-center md:justify-between w-full py-8 mt-12 md:my-12 text-lg text-white px-[5%] rounded-xl bg-primary font-manrope'>
                <div className='flex flex-col w-full gap-4 md:w-max md:flex-row'>
                    <div className='flex items-center gap-2 px-4 py-4 border rounded-lg'>
                        <IoMailOutline className="text-2xl" />
                        fiteats@gmail.com
                    </div>
                    <div className='flex items-center gap-2 px-4 py-4 border rounded-lg'>
                        <SlLocationPin className="text-2xl" />
                        Kupondole, Lalitpur
                    </div>
                    <div className='flex items-center gap-2 px-4 py-4 border rounded-lg'>
                        <FiPhone className="text-2xl" />
                        01-5424889
                    </div>
                </div>
                <div className="hidden md:flex">© Copyright 2024, PNet</div>
            </div>
            {/* Mobile-only copright */}
            <div className="w-full py-12 text-lg text-center md:hidden font-manrope">
                <p>© Copyright 2024, PNet</p>
            </div>
        </footer>

        // <div className="flex flex-col w-full px-[5%]">
        //     <div className='flex justify-between w-full pb-12 border-t-2 border-b-2'>
        //         <div data-aos='fade-up' data-aos-duration='700' data-aos-delay='100' className='flex flex-col gap-4 pt-12'>
        //             <img className='flex h-[60px] w-max' src={logo} alt="" />
        //         </div>
        //         <div data-aos='fade-up' data-aos-duration='700' data-aos-delay='200' className='flex gap-24'>
        //             <div className='flex flex-col gap-4 pt-12'>
        //                 <h5 className='text-right text-primary'>Details</h5>
        //                 <div className='flex flex-col gap-2 text-lg text-right cursor-pointer font-manrope'>
        //                     <p className='flex items-center justify-end gap-2 hover:underline'><SlLocationPin /> Kupondole, Lalitpur</p>
        //                     <p className='flex items-center justify-end gap-2 hover:underline'><IoMailOutline />pnet.pvt.ltd@gmail.com</p>
        //                     <p className='flex items-center justify-end gap-2 hover:underline'><FiPhone /> 01-5424889</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className='relative flex flex-col items-end w-full py-12 text-base font-manrope'>
        //         <p>© Copyright 2024, PNet</p>
        //         <p>Developed and maintained by <a href="https://www.project0rbit.com" target='_blank' className='hover:underline text-primary'>Antarikshya</a></p>
        //     </div>
        // </div>
        
    )
}

export default Footer