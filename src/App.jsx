import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Blogs from "./pages/Blogs"
import Categories from "./pages/Categories"
import AboutUs from "./pages/AboutUs"
import JoinUs from "./pages/JoinUs"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import MyComponent from "./components/MYComponent"
import AllCenters from "./pages/AllCenters"

function App() {


  return (
    <>
    {/* <MyComponent /> */}
    <Navigation />
    <Routes>
      <Route path='/' element= {<Home />}/>
      <Route path='/blogs' element= {<Blogs />}/>
      <Route path='/categories' element= {<Categories />}/>
      <Route path='/aboutus' element= {<AboutUs />}/>
      <Route path='/joinus' element= {<JoinUs />}/>
      <Route path="/allcenters" element= {<AllCenters />}/>
    </Routes>
    <Footer />
  
    </>
  )
}

export default App
