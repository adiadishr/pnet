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
            <div data-aos='fade-up' data-aos-duration='700' data-aos-delay={delay} className="flex flex-col px-4 py-8">
                <h5 className="font-normal"><CountUp end={title} duration={5} />{percent ? '%' : '+'}</h5>
                <p className="text-lg font-manrope">{subtitle}</p>
            </div>
        )
    }

    return (
        <div className="flex flex-col w-full px-[5%] justify-center py-24 gap-12">
            <h1 data-aos='fade-up' data-aos-duration='700' data-aos-delay='100'>Our legacy of <span className="text-primary">excellence</span></h1>
            <div className='flex flex-col md:flex-row'>
                <div className="grid items-center grid-cols-2 md:w-1/2 gap-y-0 md:gap-y-12 gap-x-12">
                    <Stats delay={150} title={260} percent={false} subtitle='Projects Completed' />
                    <Stats delay={200} title={90} percent={true} subtitle='Satisfaction Rate' />
                    <Stats delay={250} title={40} percent={false} subtitle='Awards Received' />
                    <Stats delay={300} title={450} percent={false} subtitle='Qualified Engineers' />
                </div>
                <p data-aos='fade-up' data-aos-duration='700' data-aos-delay='200' className='flex flex-col gap-4 pt-4 text-lg md:w-1/2 font-manrope'>
                    <div>Professional Network for Engineering Services Pvt. Ltd. (PNet) is an engineering consulting firm dedicated to providing customized technical consultancy in planning, design, and implementation of engineering projects across various sectors.</div>
                    <div>PNet excels in civil engineering infrastructure with a focus on excellence, innovation, and sustainability. Their team of seasoned engineers and consultants use cutting-edge technology to deliver tailored strategies for resilient, efficient, and future-ready infrastructure.</div>
                </p>
            </div>
        </div>
    )
}

export default AboutStats