import organogram from '../../assets/organogram.png'

const AboutOrganogram = () => {
    return (
        <div className="flex w-full px-[5%] flex-col items-center py-24 gap-12">
            <div data-aos='fade-up' data-aos-duration='700' data-aos-delay='100' className='flex flex-col'>
                <h5 className='text-primary'>Our Organization Structure</h5>
                <p className='font-manrope text-lg'>Unified Vision, Boundless Innovation</p>
            </div>
            <img data-aos='fade-up' data-aos-duration='700' data-aos-delay='200' src={organogram} className='flex object-cover object-center w-auto max-h-[36rem]' alt="" />
        </div>
    )
}

export default AboutOrganogram