import Footer from "./components/global/Footer/Footer"
import Navbar from "./components/global/Navbar/Navbar"
import Landing from "./pages/Landing"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import OngoingProjects from "./pages/OngoingProjects";
import CompletedProjects from "./pages/CompletedProjects";
import Contact from "./components/Contact/Contact";
AOS.init();

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes >
          <Route path="/" element={<Landing />} />
          <Route path="/About" element={<About />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Ongoing" element={<OngoingProjects />} />
          <Route path="/Completed" element={<CompletedProjects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App