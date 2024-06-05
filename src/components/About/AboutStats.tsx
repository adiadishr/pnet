interface StatsProps {
    title: string;
    subtitle: string;
}

const AboutStats = () => {

    const Stats: React.FC<StatsProps> = ({ title, subtitle }) => {
        return (
            <div className="flex flex-col">
                <h5 className="font-normal">{title}</h5>
                <p className="font-manrope text-lg">{subtitle}</p>
            </div>
        )
    }

    return (
        <div className="flex flex-col w-full px-[5%] py-36 gap-12">
            <h1>Our legacy of <span className="text-primary">excellence</span></h1>
            <div className="w-full grid grid-cols-4 items-center ">
                <Stats title='260+' subtitle='Projects Completed' />
                <Stats title='90%' subtitle='Satisfaction Rate' />
                <Stats title='40+' subtitle='Awards Received' />
                <Stats title='450+' subtitle='Qualified Engineers' />
            </div>
        </div>
    )
}

export default AboutStats