import AboutHero from "../components/About/AboutHero"
import AboutOrganogram from "../components/About/AboutOrganogram"
import AboutStats from "../components/About/AboutStats"
import LandingMissionVision from "../components/Landing/LandingMissionVision"
import LandingPortfolio from "../components/Landing/LandingPortfolio"

const About = () => {
    return (
        <>
            <AboutHero />
            <LandingMissionVision />
            <AboutOrganogram />
            <LandingPortfolio />
            <AboutStats />
        </>
    )
}

export default About