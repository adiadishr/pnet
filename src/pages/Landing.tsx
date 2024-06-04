import LandingHero from "../components/Landing/LandingHero"
import LandingMissionVision from "../components/Landing/LandingMissionVision"
import LandingNewsletter from "../components/Landing/LandingNewsletter"
import LandingServices from "../components/Landing/LandingServices"

const Landing = () => {
    return (
        <>
            <LandingHero />
            <LandingMissionVision />
            <LandingServices />
            <LandingNewsletter />
        </>
    )
}

export default Landing