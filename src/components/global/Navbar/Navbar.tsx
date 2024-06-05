import logo from '../../../assets/logo.png'
import './index.css'
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from 'react-router-dom';
 
const Navbar = () => {
    return (
        <nav data-aos='fade-down' data-aos-duration='700'>
            <img src={logo} className='flex h-[60px]' alt="" />
            <ul className="hidden gap-8 md:flex">
                <Link to='/' className='font-bold'>Home</Link>
                <Link to='/About'>About Us</Link>
                <Link to='/Gallery'>Gallery</Link>
                <Link to='/Portfolio'>Portfolio</Link>
            </ul>
            <button className='flex items-center justify-center gap-2 duration-300 hover:text-primary font-bold hover:brightness-125 group'>Get in touch <BsArrowRightCircle className='group-hover:rotate-[-45deg] transition-transform duration-300' size={20} /></button>
        </nav>
    )
}

export default Navbar