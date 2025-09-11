import HeroSection from "../components/HeroSection"
import HomeBlogs from "../components/HomeBlogs"
import HomeCenters from "../components/HomeCenters"
import HomeJoinUs from "../components/HomeJoinUs"
import HomeProffesionals from "../components/HomeProffesionals"
import HomeSuccessStories from "../components/HomeSuccessStories"
import Information from "../components/Information"


const Home = () => {
  return (
    <div>
      <HeroSection />
      <HomeCenters />
      <HomeProffesionals />
      <Information />
      <HomeSuccessStories />
       <HomeJoinUs />
      <HomeBlogs />
     
    </div>
  )
}

export default Home
