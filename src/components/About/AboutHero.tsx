import about from '../../assets/about.png'

const AboutHero = () => {
    return (
        <div className="mt-[60px] flex min-h-[calc(100vh-60px)] px-[5%] gap-16">
            <div className='md:w-1/2 flex flex-col pt-12 divide-y'>
                <div data-aos='fade-up' data-aos-duration='700' data-aos-delay='100' className='flex flex-col pb-4'>
                    <h1>Building Dreams</h1>
                    <h1 className='leading-[1.25]'>With <span className='text-primary'>Precision</span> and <span className='text-primary'>Vision</span></h1>
                </div>
                <p data-aos='fade-up' data-aos-duration='700' data-aos-delay='200' className='text-lg font-manrope pt-4 flex flex-col gap-4'>
                    <div>Professional Network for Engineering Services Pvt. Ltd. (PNet) is an engineering consulting firm dedicated to providing customized technical consultancy in planning, design, and implementation of engineering projects across various sectors.</div>
                    <div>PNet excels in civil engineering infrastructure with a focus on excellence, innovation, and sustainability. Their team of seasoned engineers and consultants use cutting-edge technology to deliver tailored strategies for resilient, efficient, and future-ready infrastructure.</div>
                </p>
            </div>
            <div className='flex md:w-1/2'>
                <img data-aos='fade-up' data-aos-duration='700' data-aos-delay='300' className='flex object-cover object-center' src={about} alt="" />
            </div>
        </div>
    )
}

export default AboutHero