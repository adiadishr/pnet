import './index.css'
import services from '../../data/data'

const LandingServices = () => {
    return (
        <div id='serviceAnchor' className="flex flex-col min-h-screen bg-neutral px-[5%] w-full pb-24">
            <div className='flex flex-col items-center w-full gap-4 py-20 mt-4'>
                <h5 className='text-primary'>Our Services</h5>
                <p className='text-lg text-center font-manrope'>20 Years of Excellence in Client-Oriented Infrastructure Solutions</p>
            </div>
            <div className='grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16'>
                {services.map((service) => (
                    <div className='flex flex-col overflow-hidden bg-white shadow-xl rounded-3xl group' key={service.title}>
                        <img src="https://source.unsplash.com/user/traceofwind/likes/200x200" alt={service.alt} />
                        <h3 className='flex justify-center w-full py-4 mt-4 text-xl font-semibold font-poppins px-[7.5%] text-center'>{service.title}</h3>
                        <ul className='text-lg font-light font-manrope px-[7.5%] list-disc pb-8 list-inside'>
                            {service.list.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LandingServices