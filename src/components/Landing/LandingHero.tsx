import './index.css'
const LandingHero = () => {
    return (
        <>
            <div className='absolute top-0 flex w-[75%] md:w-[47%] z-[-5] min-h-screen bg-black/20 backdrop-blur-md'></div>
            <div id="landingHeroBackdrop" className="absolute top-0 z-[-10] flex w-full min-h-screen"></div>
            <div className="mt-[60px] min-h-[calc(100vh-60px)] flex md:flex-row flex-col md:justify-start justify-center md:items-center px-[5%] text-white">
                <div className="flex flex-col gap-6 md:w-1/2">
                    <h1 className="font-bold uppercase text-5xl/snug font-poppins">
                        Your Vision,<br /> <span className='text-primary brightness-150'>Our Expertise</span>
                    </h1>
                    <div className='flex flex-col gap-4 divide-y text-lg/loose font-manrope'>
                        <p className='w-2/3'>
                            Transforming Infrastructure with Excellence, Innovation, and Sustainable Solutions.
                        </p>
                        <p className='w-2/3 pt-4 font-thin'>
                            Since 2003 AD
                        </p>
                    </div>
                </div>
                <div className="flex mt-10 md:justify-center md:w-1/2 md:mt-0">
                    <a href='#serviceAnchor' className='px-16 py-4 text-lg duration-300 border border-white cursor-pointer hover:bg-white hover:text-black font-manrope'>
                        Find out more
                    </a>
                </div>
            </div>
        </>
    )
}

export default LandingHero