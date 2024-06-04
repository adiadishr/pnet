import './index.css'

const LandingMissionVision = () => {
    return (
        <div className='flex md:flex-row flex-col w-full divide-y md:divide-y-0 px-[5%] bg-primary py-24 text-white md:divide-x'>
            <div data-aos-duration='700' data-aos-delay='100' data-aos='fade-up' className='flex flex-col items-center gap-4 pb-12 md:px-12 md:w-1/2 md:pb-0'>
                <h5 className='flex justify-center w-full'>Our Mission</h5>
                <p className='flex font-light text-center text-lg/loose font-manrope'>To provide and improve the quality of services in the infrastructure sector through continuous growth of  professionals and improvements in methodology.</p>
            </div>
            <div data-aos-duration='700' data-aos-delay='200' data-aos='fade-up' className='flex flex-col items-center gap-4 pt-12 md:px-12 md:w-1/2 md:pt-0'>
                <h5 className='flex justify-center w-full'>Our Vision</h5>
                <p className='flex font-light text-center text-lg/loose font-manrope'>To lead in the consulting sector in infrastructure development in the country, shaping innovative and sustainable solutions for a brighter future.</p>
            </div>
        </div>
    )
}

export default LandingMissionVision