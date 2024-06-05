import AboutHero from "../components/About/AboutHero"
import AboutOrganogram from "../components/About/AboutOrganogram"
import AboutStats from "../components/About/AboutStats"
import LandingMissionVision from "../components/Landing/LandingMissionVision"
import LandingPortfolio from "../components/Landing/LandingPortfolio"

const About = () => {
    return (
        <>
            <AboutHero />
            <AboutStats />
            <LandingPortfolio />
            {/* <LandingMissionVision /> */}
            <AboutOrganogram />
        </>
    )
}

export default About