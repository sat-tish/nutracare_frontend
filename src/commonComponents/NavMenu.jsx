import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link} from "react-router"

const NavMenu = () => {

const categoryList =[
        "Category",
        "Accupressure",
        "Accupuncture",
        "Aromatherapy",
        "Aura soma",
        "Ayurveda",
        "Bioenergetics",
        "Botox",
        "Cheletion therapy",
        "Chiropractor",
        "Coherence therapy",
        "Cupping therapy",
        "EMDR",
        "Homeopathy",
        "Hormone therapy",
        "Hot stone massage",
        "IV nutrient therapy",
        "Laser therapy",
        "Mistletoe therapy",
        "Naturopathy",
        "Neural therapy",
        "Nutritionist",
        "Osteopathy",
        "Ozone therapy",
        "Physiotherapy",
        "Prolotherapy",
        "Psychotherapy",
        "Reflexology",
        "Reiki",
        "Traditional Chinese medicine",
        "Yoga"
       ]
       const categoriesAll = categoryList.map((element,index)=>{
        return(
          <option value="" key={index}>{element}</option>
        )
       })

  return (
     <Menu as="div" className="relative inline-block">
      <MenuButton className="inline-flex w-full justify-center gap-x-1.5"> Categories
        <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 mt-0.5 text-gray-700" />
      </MenuButton>

      <MenuItems transition className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
        <div className="">
          <MenuItem><Link to="/nutracare_frontend/categories" className="block px-8 py-4 text-sm text-gray-800 data-focus:outline-hidden">
              {categoriesAll}
            </Link></MenuItem>
        </div>
      </MenuItems>
    </Menu> 
       
  )
}

export default NavMenu
