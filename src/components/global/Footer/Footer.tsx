import logo from '../../../assets/logo.png'

const Footer = () => {
    return (
        <div data-aos='fade-up' data-aos-delay='300' className="flex w-full h-96 px-[5%] py-20 mt-4">
            <div className='flex flex-col gap-4'>
                <img className='flex h-[60px] w-max' src={logo} alt="" />
                <h5 className='text-primary brightness-125'>Professional Network <br /> of Engineering Services</h5>
            </div>
        </div>
    )
}

export default Footer