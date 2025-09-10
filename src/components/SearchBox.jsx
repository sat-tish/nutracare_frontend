import Category from "./Category"
import DoctorCenter from "./DoctorCenter"
import SearchButton from "./SearchButton"
import SelectCity from "./SelectCity"


const SearchBox = () => {
  return (
    <div className="w-full py-5 p bg-gray-700 bg-[url('./assets/images/background-images/b2.jpg')] bg-no-repeat bg-cover bg-center bg-blend-soft-light">
      <div className="w-[90%] m-auto grid sm:grid-cols-2 lg:grid-cols-4 max-sm:gap-2 gap-1 p-3 bg-white rounded">
           <SelectCity />
           <DoctorCenter />
           <Category />
           <SearchButton />
      </div>
    </div>
  )
}

export default SearchBox
