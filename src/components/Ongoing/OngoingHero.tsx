import { services } from '../../data'

const OngoingHero = () => {
    return (
        <div className="mt-[60px] flex py-24 flex-col px-[5%]">
            <h1 className="w-full pb-12 text-center">Our <span className='text-primary'>ongoing</span> projects</h1>
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

export default OngoingHero