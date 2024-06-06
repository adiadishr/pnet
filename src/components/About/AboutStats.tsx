import CountUp from 'react-countup';

interface StatsProps {
    title: number;
    subtitle: string;
    delay: number;
    percent: boolean;
}

const AboutStats = () => {

    const Stats: React.FC<StatsProps> = ({ title, subtitle, delay, percent }) => {
        return (
            <div data-aos='fade-up' data-aos-duration='700' data-aos-delay={delay} className="flex flex-col">
                <h5 className="font-normal"><CountUp end={title} duration={5} />{percent ? '%' : '+'}</h5>
                <p className="text-lg font-manrope">{subtitle}</p>
            </div>
        )
    }

    return (
        <div className="flex flex-col w-full px-[5%] justify-center min-h-[90vh] gap-12">
            <h1 data-aos='fade-up' data-aos-duration='700' data-aos-delay='100'>Our legacy of <span className="text-primary">excellence</span></h1>
            <div className="grid items-center w-full grid-cols-2 md:grid-cols-4 gap-y-12 ">
                <Stats delay={150} title={260} percent={false} subtitle='Projects Completed' />
                <Stats delay={200} title={90} percent={true} subtitle='Satisfaction Rate' />
                <Stats delay={250} title={40} percent={false} subtitle='Awards Received' />
                <Stats delay={300} title={450} percent={false} subtitle='Qualified Engineers' />
            </div>
        </div>
    )
}

export default AboutStats