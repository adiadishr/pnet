import Footer from "./components/global/Footer/Footer"
import Navbar from "./components/global/Navbar/Navbar"
import Landing from "./pages/Landing"
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init();

const App = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <Footer />
    </>
  )
}

export default App