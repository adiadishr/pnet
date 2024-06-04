import LandingHero from "../components/Landing/LandingHero"
import LandingMissionVision from "../components/Landing/LandingMissionVision"
import LandingNewsletter from "../components/Landing/LandingNewsletter"
import LandingServices from "../components/Landing/LandingServices"
import LandingTestimonials from "../components/Landing/LandingTestimonials"

const Landing = () => {
    return (
        <>
            <LandingHero />
            <LandingServices />
            <LandingMissionVision />
            <LandingTestimonials />
            <LandingNewsletter />
        </>
    )
}

export default Landing