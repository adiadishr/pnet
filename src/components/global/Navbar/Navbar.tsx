import logo from '../../../assets/logo.png'
import './index.css'
import { BsArrowRightCircle } from "react-icons/bs";

const Navbar = () => {
    return (
        <nav data-aos='fade-down' className="">
            <img src={logo} className='flex h-[60px]' alt="" />
            <ul className="hidden gap-8 md:flex">
                <li className='font-bold'>Home</li>
                <li>Explore</li>
                <li>About Us</li>
                <li>Our Team</li>
                <li>Gallery</li>
                <li>Portfolio</li>
            </ul>
            <button className='flex items-center justify-center gap-2 duration-300 hover:text-primary hover:font-medium hover:brightness-125 group'>Get in touch <BsArrowRightCircle className='group-hover:rotate-[-45deg] transition-transform duration-300' size={20} /></button>
        </nav>
    )
}

export default Navbar