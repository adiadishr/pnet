import handshake from '../../assets/handshake.png'
import { Link } from 'react-router-dom'

const LandingPortfolio = () => {
    return (
        <div className="w-full bg-neutral items-center justify-center px-[5%] flex gap-16">
            <img data-aos='fade-up' data-aos-duration='700' data-aos-delay='100' src={handshake} className='flex' alt="" />
            <div data-aos='fade-up' data-aos-duration='700' data-aos-delay='200' className='flex flex-col w-1/2 gap-4'>
                <h1 className="flex flex-col leading-[1.25]">
                    <div>We bring your vision</div>
                    <div className='text-primary brightness-150'>to life.</div>
                </h1>
                <div className='flex flex-col divide-y font-manrope text-black text-lg'>
                    <p className='pb-4'>
                        At our core, we are 450 people obsessed with innovating with technology in the right ways.
                    </p>
                    <p className='font-light pt-4'>
                        We are 100% oriented around solving your problems and making you successful. If you need skilled people, we make sure they have the talent and nature to plug right into your team.
                    </p>
                </div>
                <div data-aos='fade-up' data-aos-duration='700' data-aos-delay='300' className='flex gap-4'>
                    <Link to='/Completed' className='portfolioBtn'>
                        Find out more
                    </Link>
                    <a href='#serviceAnchor' className='portfolioBtn'>
                        Get in touch
                    </a>
                </div>
            </div>
        </div>
    )
}

export default LandingPortfolio