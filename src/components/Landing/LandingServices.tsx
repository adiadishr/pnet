import './index.css'
import { services } from '../../data/data'

const LandingServices = () => {
    return (
        <div id='serviceAnchor' className="flex flex-col min-h-screen bg-neutral px-[5%] w-full pb-24">
            <div data-aos-duration='700' data-aos='fade-up' className='flex flex-col items-center w-full gap-4 py-20 mt-4'>
                <h5 className='text-primary'>Our Services</h5>
                <p className='text-lg text-center font-manrope'>20 Years of Excellence in Client-Oriented Infrastructure Solutions</p>
            </div>
            <div className='grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16'>
                {services.map((service) => (
                    <div data-aos-duration='700' data-aos='fade-up' data-aos-delay={service.delay} className='flex flex-col overflow-hidden bg-white shadow-xl rounded-3xl group' key={service.title}>
                        <div className='w-full overflow-hidden group'>
                            <img src={service.url} alt={service.alt} className='flex w-full duration-500 group-hover:scale-110' /></div>
                        <h3 className='flex justify-center w-full py-4 mt-4 text-xl font-semibold font-poppins px-[7.5%] text-center'>{service.title}</h3>
                        <ul className='text-base font-manrope px-[7.5%] text-center divide-y pb-8'>
                            {service.list.map((item) => (
                                <li className='py-2' key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LandingServices