const Contact = () => {
    return (
        <div className="mt-[60px] py-12 flex flex-col items-center">
            <h1><span className="text-primary">Contact</span> us</h1>
            <div className="py-12 w-full px-[5%]">
                <div className="flex flex-col w-full gap-24 md:gap-12 md:flex-row">
                    <div className='flex flex-col order-2 md:w-1/2 md:order-1'>
                        <div className="overflow-hidden bg-white rounded-lg shadow-md">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d883.0783825764822!2d83.03712689999999!3d27.7076043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996f855c08f3c37%3A0xea6dd16c7db2fa3a!2sShree%20Siddhartha%20Smarak%20Secondary%20School!5e0!3m2!1sen!2snp!4v1715858656772!5m2!1sen!2snp"
                                width="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-lg md:h-[1000px] h-[450px]"
                            ></iframe>
                        </div>
                    </div>
                    <div className='flex flex-col order-1 gap-12 md:w-1/2 md:order-2'>
                        <div className='flex flex-col w-full gap-4 text-lg text-justify font-manrope'>
                            <div className='pt-4 '>
                                We believe in fostering a seamless and transparent admission process to welcome prospective students into our community. To begin, interested guardians are invited to visit our school campus for a tour.
                            </div>
                            <div className='pt-4'>
                                To book such a visit or inquire more, scroll down for our contact details or cick the button below to fill out a form and inquire, after which our team will contact you ASAP.
                            </div>
                        </div>
                        <form className="flex flex-col justify-between md:h-full md:pb-0">
                            <section className="flex flex-col gap-4 mt-4 mb-8 text-lg sm:mb-12 font-manrope">
                                <h5 className="pb-12 uppercase">Simply fill out <span className="text-primary">this form</span></h5>
                                <div className="flex flex-col justify-between gap-4 md:gap-8">
                                    <div className="flex flex-col w-full">
                                        <h5 className="flex pb-2 text-lg font-normal">Name:</h5>
                                        <input placeholder="Enter your name" className="w-full p-1 duration-300 border-b-2 outline-none focus:border-black focus:pb-3 md:p-2 font-manrope text-neutral-700" type="text" />
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <h5 className="flex pb-2 text-lg font-normal">Email:</h5>
                                        <input placeholder="Enter your email" className="w-full p-1 duration-300 border-b-2 outline-none focus:border-black focus:pb-3 md:p-2 font-manrope text-neutral-700" type="email" />
                                    </div>
                                    <div className="flex flex-col w-full gap-2">
                                        <h5 className="flex pb-2 text-lg font-normal">What is the reason for your inquiry?</h5>
                                        <textarea rows={6} placeholder="..." className="w-full p-1 duration-300 border-b-2 outline-none focus:border-black focus:py-4 md:p-2 font-manrope text-neutral-700" />
                                    </div>
                                </div>
                            </section>
                            <input type="submit" className='py-2 font-semibold text-white duration-300 rounded-md cursor-pointer bg-primary hover:brightness-125' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact