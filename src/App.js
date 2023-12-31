import React from "react"
import "./App.css"
import About from "./components/About"
import Blog from "./components/Blog"
import Branding from "./components/Branding"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Portfolio from "./components/portfolio/Portfolio"
import Skill from "./components/Skill"
import Testimonials from "./components/Testimonials"
import Work from "./components/Work"
import Wrapper from "./components/Wrapper"

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Skill />
      <Wrapper />
      <Branding />
      <Testimonials />
      <Blog />
      <Work />
      <Footer />
    </>
  )
}

export default App;