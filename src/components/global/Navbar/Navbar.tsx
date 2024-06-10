import logo from '../../../assets/logo.png'
import './index.css'
import { BsArrowRightCircle } from "react-icons/bs";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { Link, useLocation } from 'react-router-dom';
import {toTop} from '../../../utilities/toTop';
import Dropdown from './Dropdown';


const Navbar = () => {

    const location = useLocation();

    return (
        <nav data-aos='fade-down' data-aos-duration='700'>
            <img src={logo} className='flex h-[60px]' alt="" />
            <ul className="hidden gap-8 md:flex font-manrope">
                <Link className={`navlink ${location.pathname === '/' ? 'navlink-active' : ''}`} to='/' onClick={toTop}>Home</Link>
                <Link className={`navlink ${location.pathname === '/About' ? 'navlink-active' : ''}`} to='/About' onClick={toTop}>About Us</Link>
                <Dropdown>
                    <p className={`navlink flex gap-[6px] items-center group cursor-default ${location.pathname === '/Completed' || location.pathname === '/Ongoing' ? 'navlink-active' : ''}`}>
                        Projects <HiOutlineChevronDown className='transition-transform duration-300 group-hover:rotate-180' />
                    </p>
                </Dropdown>
                <Link to='/Gallery' className={`navlink ${location.pathname === '/Gallery' ? 'navlink-active' : ''}`} onClick={toTop}>Gallery</Link>
            </ul>
            <Link to='/Contact' onClick={toTop} className={`navlink flex items-center justify-center gap-2 font-bold group ${location.pathname === '/Contact' ? 'navlink-active' : ''} `}>Get in touch <BsArrowRightCircle className={`group-hover:rotate-[-45deg] transition-transform duration-300 ${location.pathname === '/Contact' ? 'rotate-[-45deg] navlink-active' : ''}`} size={20} /></Link>
        </nav>
    )
}

export default Navbar