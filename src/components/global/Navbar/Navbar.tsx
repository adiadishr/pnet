import logo from '../../../assets/logo.png'
import './index.css'
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from 'react-router-dom';
import toTop from '../../../utilities/toTop'

const Navbar = () => {
    return (
        <nav data-aos='fade-down' data-aos-duration='700'>
            <img src={logo} className='flex h-[60px]' alt="" />
            <ul className="hidden gap-8 md:flex font-manrope">
                <Link className='navlink' to='/' onClick={toTop}>Home</Link>
                <Link className='navlink' to='/About' onClick={toTop}>About Us</Link>
                <Link className='navlink' to='/Gallery' onClick={toTop}>Gallery</Link>
                <Link className='navlink' to='/Portfolio' onClick={toTop}>Portfolio</Link>
            </ul>
            <button className='flex items-center justify-center gap-2 duration-300 hover:text-primary font-bold hover:brightness-125 group'>Get in touch <BsArrowRightCircle className='group-hover:rotate-[-45deg] transition-transform duration-300' size={20} /></button>
        </nav>
    )
}

export default Navbar