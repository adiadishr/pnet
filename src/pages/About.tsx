import AboutTeam from "@/components/About/AboutTeam"
import AboutHero from "../components/About/AboutHero"
import AboutOrganogram from "../components/About/AboutOrganogram"
import AboutStats from "../components/About/AboutStats"
import LandingPortfolio from "../components/Landing/LandingPortfolio"

const About = () => {
    return (
        <>
            <AboutHero />
            <AboutStats />
            <LandingPortfolio />
            <AboutOrganogram />
            <AboutTeam />
        </>
    )
}

export default About