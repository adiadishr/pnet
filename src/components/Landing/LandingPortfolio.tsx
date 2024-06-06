import handshake from '../../assets/handshake.png'
import { Link } from 'react-router-dom'

const LandingPortfolio = () => {
    return (
        <div className="w-full bg-neutral items-center justify-center px-[5%] flex md:flex-row flex-col md:gap-16 gap-12">
            <div data-aos='fade-up' data-aos-duration='700' data-aos-delay='100' className='flex overflow-hidden'>
                <img src={handshake} className='flex rotate-[-90deg] md:rotate-0 md:w-auto' alt="" />
            </div>
            <div data-aos='fade-up' data-aos-duration='700' data-aos-delay='200' className='flex flex-col gap-4 md:w-1/2'>
                <h1 className="flex flex-col leading-[1.25]">
                    <div>We bring your vision</div>
                    <div className='text-primary brightness-150'>to life.</div>
                </h1>
                <div className='flex flex-col text-lg text-black divide-y font-manrope'>
                    <p className='pb-4'>
                        At our core, we are 450 people obsessed with innovating with technology in the right ways.
                    </p>
                    <p className='pt-4 font-light'>
                        We are 100% oriented around solving your problems and making you successful. If you need skilled people, we make sure they have the talent and nature to plug right into your team.
                    </p>
                </div>
                <div data-aos='fade-up' data-aos-duration='700' data-aos-delay='300' className='flex gap-4'>
                    <Link to='/Completed' className='portfolioBtn'>
                        Find out more
                    </Link>
                    <a href='#serviceAnchor' className='portfolioBtnOutline'>
                        Get in touch
                    </a>
                </div>
            </div>
        </div>
    )
}

export default LandingPortfolio