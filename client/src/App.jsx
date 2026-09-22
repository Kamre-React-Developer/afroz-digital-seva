import HeroSection from './components/home/HeroSection'
import Navbar from './components/layout/Navbar'
import PopularServices from './components/home/PopularServices'
import BiharGovernmentServices from './components/home/BiharGovernmentServices'
import CentralGovernmentServices from './components/home/CentralGovernmentServices' 
import HowItWorks from './components/home/HowItWorks'
import WhyChooseUs from './components/home/WhyChooseUs'
import Testimonials from './components/home/Testimonials'
import Footer from './components/home/Footer'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <PopularServices />
        <BiharGovernmentServices />
        <CentralGovernmentServices />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <Footer />
      </main>
    </>
  )
}

export default App