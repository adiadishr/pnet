import organogram from '../../assets/organogram.png'

const AboutOrganogram = () => {
    return (
        <div className="flex w-full px-[5%] flex-col items-center py-24 gap-12">
            <div className='flex flex-col'>
                <h5 className='text-primary'>Our Organization Structure</h5>
                <p className='font-manrope text-lg'>Unified Vision, Boundless Innovation</p>
            </div>
            <img src={organogram} className='flex object-cover object-center w-auto max-h-[36rem]' alt="" />
        </div>
    )
}

export default AboutOrganogram