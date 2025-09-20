import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Blogs from "./pages/Blogs"
import Categories from "./pages/Categories"
import AboutUs from "./pages/AboutUs"
import JoinUs from "./pages/JoinUs"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import AllCenters from "./pages/AllCenters"
import AllProfessionals from "./pages/AllProfessionals"
import SingleCenter from "./pages/SingleCenter"
import SingleProfessional from "./pages/SingleProfessional"
import AllSuccessStories from "./pages/AllSuccessStories"
import SingleSuccessStory from "./pages/SingleSuccessStory"
import SingleBlog from "./pages/SingleBlog"

function App() {

  return (
    <>
    <Navigation />
    <Routes>
      <Route path='/nutracare_frontend' element= {<Home />}/>
      <Route path='/nutracare_frontend/blogs' element= {<Blogs />}/>
      <Route path='/nutracare_frontend/categories' element= {<Categories />}/>
      <Route path='/nutracare_frontend/aboutus' element= {<AboutUs />}/>
      <Route path='/nutracare_frontend/joinus' element= {<JoinUs />}/>
      <Route path="/nutracare_frontend/allcenters" element= {<AllCenters />}/>
      <Route path="/nutracare_frontend/allprofessionals" element= {<AllProfessionals />}/>
      <Route path="/nutracare_frontend/singlecenter" element= {<SingleCenter />}/>
      <Route path="/nutracare_frontend/singleprofessional" element={<SingleProfessional />} />
      <Route path="/nutracare_frontend/allsuccessstories" element={<AllSuccessStories />} />
      <Route path="/nutracare_frontend/singlesuccessstory" element={<SingleSuccessStory />} />
      <Route path="/nutracare_frontend/singleblog" element={<SingleBlog />} />
    </Routes>
    <Footer />
  </>
  )
}

export default App
