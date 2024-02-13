import Analytics from "./components/Analytics"
import Hero from "./components/Hero"
import Header from "./components/header/Header"

const App = () => {
  return (
    <div className="text-white">
      <Header/>
      <Hero/>
      <Analytics/>
    </div>
  )
}

export default App