import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Blogs from "./pages/Blogs"
import Categories from "./pages/Categories"
import AboutUs from "./pages/AboutUs"
import JoinUs from "./pages/JoinUs"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

function App() {


  return (
    <>
    <Navigation />
    <Routes>
      <Route path='/' element= {<Home />}/>
      <Route path='/blogs' element= {<Blogs />}/>
      <Route path='/categories' element= {<Categories />}/>
      <Route path='/aboutus' element= {<AboutUs />}/>
      <Route path='/joinus' element= {<JoinUs />}/>
    </Routes>
    <Footer />
  
    </>
  )
}

export default App
