import Analytics from "./components/Analytics"
import Cards from "./components/Cards"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Newsletter from "./components/Newsletter"
import Header from "./components/header/Header"

const App = () => {
  return (
    <div className="text-white">
      <Header/>
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App