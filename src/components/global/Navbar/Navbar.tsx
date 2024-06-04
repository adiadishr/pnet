import logo from '../../../assets/logo.png'
import './index.css'

const Navbar = () => {
    return (
        <nav className="">
            <img src={logo} className='flex h-[60px]' alt="" />
            <ul className="hidden gap-8 md:flex">
                <li className='font-bold'>Home</li>
                <li>Explore</li>
                <li>About Us</li>
                <li>Our Team</li>
                <li>Gallery</li>
                <li>Portfolio</li>
            </ul>
            <button className="ctaBtn">Get in Touch</button>
        </nav>
    )
}

export default Navbar