import Analytics from "./components/Analytics"
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
    </div>
  )
}

export default App