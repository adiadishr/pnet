import { FaArrowDown } from "react-icons/fa"

const CompletedHero = () => {
    return (
        <div className="mt-[30px] w-full flex px-[5%]">
            <div className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-30px)] md:pb-0 mb-12">
                <h1 data-aos='fade-up' data-aos-duration='700' data-aos-delay='100' className="w-full pb-12 text-center">Our <span className="text-primary">completed</span> projects</h1>
                <p data-aos='fade-up' data-aos-duration='700' data-aos-delay='200' className="flex flex-col gap-6 text-lg text-center md:w-2/3 font-manrope">
                    <div>
                        Explore a selection of our key projects, each showcasing our engineering expertise and innovative solutions
                        .
                    </div>
                    <div>Join us as we take you through them one by one.</div>
                </p>
                <a data-aos='fade-up' data-aos-duration='700' data-aos-delay='300' href="#CaseStudies" className="mt-12 px-12 md:px-16 w-max py-4 text-center bg-primary text-white text-lg duration-300 border border-primary cursor-pointer font-manrope hover:-translate-y-[6px] flex items-center gap-2">
                    Explore <FaArrowDown />
                </a>
            </div>
        </div>
    )
}

export default CompletedHero