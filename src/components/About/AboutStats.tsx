interface StatsProps {
    title: string;
    subtitle: string;
    delay: number;
}

const AboutStats = () => {

    const Stats: React.FC<StatsProps> = ({ title, subtitle, delay }) => {
        return (
            <div data-aos='fade-up' data-aos-duration='700' data-aos-delay={delay} className="flex flex-col">
                <h5 className="font-normal">{title}</h5>
                <p className="font-manrope text-lg">{subtitle}</p>
            </div>
        )
    }

    return (
        <div className="flex flex-col w-full px-[5%] py-36 gap-12">
            <h1 data-aos='fade-up' data-aos-duration='700' data-aos-delay='100'>Our legacy of <span className="text-primary">excellence</span></h1>
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-y-12 items-center ">
                <Stats delay={200} title='260+' subtitle='Projects Completed' />
                <Stats delay={300} title='90%' subtitle='Satisfaction Rate' />
                <Stats delay={400} title='40+' subtitle='Awards Received' />
                <Stats delay={500} title='450+' subtitle='Qualified Engineers' />
            </div>
        </div>
    )
}

export default AboutStats