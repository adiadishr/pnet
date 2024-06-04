import { IoMailOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { FiPhone } from "react-icons/fi";
import logo from '../../../assets/logo.png'

const Footer = () => {
    return (
        <div className="flex flex-col w-full px-[5%]">
            <div className='flex justify-between w-full border-t-2 border-b-2 pb-12'>
                <div data-aos='fade-up' data-aos-duration='700' data-aos-delay='300' className='flex flex-col gap-4 pt-12'>
                    <img className='flex h-[60px] w-max' src={logo} alt="" />
                    <h5 className='text-primary '>Professional Network <br /> of Engineering Services</h5>
                </div>
                <div data-aos='fade-up' data-aos-duration='700' data-aos-delay='500' className='flex gap-24'>
                    <div className='pt-12 flex flex-col gap-4'>
                        <h5 className='text-primary '>Quick Links</h5>
                        <div className='text-right font-manrope text-lg cursor-pointer'>
                            <p className='hover:underline'>Home</p>
                            <p className='hover:underline'>Explore</p>
                            <p className='hover:underline'>About Us</p>
                            <p className='hover:underline'>Our Team</p>
                            <p className='hover:underline'>Gallery</p>
                            <p className='hover:underline'>Portfolio</p>
                        </div>
                    </div>
                    <div className='pt-12 flex flex-col gap-4'>
                        <h5 className='text-primary  text-right'>Details</h5>
                        <div className='text-right font-manrope text-lg cursor-pointer gap-2 flex flex-col'>
                            <p className='hover:underline flex items-center justify-end gap-2'><SlLocationPin /> Kupondole, Lalitpur</p>
                            <p className='hover:underline flex items-center justify-end gap-2'><IoMailOutline />pnet.pvt.ltd@gmail.com</p>
                            <p className='hover:underline flex items-center justify-end gap-2'><FiPhone /> 01-5424889</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full py-12 flex justify-center relative'>
                <div> </div>
                <h3 className='text-primary font-poppins text-lg font-bold '>Copyright 2024, PNet</h3>
                <p className='font-manrope text-base absolute right-0'>Developed and maintained by <a href="https://www.project0rbit.com" target='_blank' className='hover:underline text-primary'>Antarikshya</a></p>
            </div>
        </div>
    )
}

export default Footer