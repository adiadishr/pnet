import logo from '../../../assets/logo.png'
import './index.css'
import { BsArrowRightCircle } from "react-icons/bs";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { Link, useLocation } from 'react-router-dom';
import toTop from '../../../utilities/toTop';
import Dropdown from './Dropdown';


const Navbar = () => {

    const location = useLocation();

    return (
        <nav data-aos='fade-down' data-aos-duration='700'>
            <img src={logo} className='flex h-[60px]' alt="" />
            <ul className="hidden gap-8 md:flex font-manrope">
                <Link className={`navlink ${location.pathname === '/' ? 'navlink-active' : ''}`} to='/' onClick={toTop}>Home</Link>
                <Link className={`navlink ${location.pathname === '/About' ? 'navlink-active' : ''}`} to='/About' onClick={toTop}>About Us</Link>
                <Link to='/Gallery' className={`navlink ${location.pathname === '/Gallery' ? 'navlink-active' : ''}`} onClick={toTop}>Gallery</Link>
                <Dropdown>
                    <p className={`navlink flex gap-[6px] items-center group cursor-default ${location.pathname === '/Completed' || location.pathname === '/Ongoing' ? 'navlink-active' : ''}`}>
                        Projects <HiOutlineChevronDown className='transition-transform duration-300 group-hover:rotate-180' />
                    </p>
                </Dropdown>
            </ul>
            <button className='flex items-center justify-center gap-2 font-bold duration-300 hover:text-primary hover:brightness-125 group'>Get in touch <BsArrowRightCircle className='group-hover:rotate-[-45deg] transition-transform duration-300' size={20} /></button>
        </nav>
    )
}

export default Navbar