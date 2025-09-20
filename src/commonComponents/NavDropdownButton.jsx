// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
// import { Link} from "react-router"
import logoImage from '../assets/images/illustrations/Nutracare_multi_logo.jpg'
'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router'

const NavDropdownButton = () => {
const [open, setOpen] = useState(false)

  return (
    <div>
       <button onClick={() => setOpen(true)} className="flex items-center justify-center border-[1px] bg-white text-gray-700 hover:text-gray-900 font-bold py-1 px-1 rounded"> 
       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
           </path>
        </svg>
        </button>
      <Dialog open={open} onClose={setOpen} className="relative z-40">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <DialogPanel
                transition
                className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
              >
                <TransitionChild>
                  <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="relative rounded-md text-white hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      <span className="absolute -inset-2.5" />
                      <span className="sr-only">Close panel</span>
                      <XMarkIcon aria-hidden="true" className="size-6" />
                    </button>
                  </div>
                </TransitionChild>
                <div className="relative flex h-full flex-col overflow-y-auto bg-[#006D95] py-6 shadow-xl">
                  <div className="px-4 sm:px-6">
                    <img className='h-10' src={logoImage} alt="" />
                    {/* <DialogTitle className="text-base font-semibold text-gray-900">Home</DialogTitle> */}
                  </div>
                  <hr className='h-[1px] bg-gray-300 border-none mt-4' />
                  <div className="relative mt-6 flex flex-col gap-5 px-8">
                    <Link onClick={() => setOpen(false)} className="font-medium hover:font-semibold text-white" to="/nutracare_frontend/">Home</Link>
                    <Link onClick={() => setOpen(false)} className="font-medium hover:font-semibold text-white" to="/nutracare_frontend/categories">Categories</Link>
                    <Link onClick={() => setOpen(false)} className="font-medium hover:font-semibold text-white" to="/nutracare_frontend/blogs">Blogs</Link>
                    <Link onClick={() => setOpen(false)} className="font-medium hover:font-semibold text-white" to="/nutracare_frontend/aboutus">About Us</Link>
                    <Link onClick={() => setOpen(false)} className="font-medium hover:font-semibold text-white" to="/nutracare_frontend/joinus">Join Us</Link>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
    // <Menu as="div" className="relative inline-block">
    //   <MenuButton className="flex items-center justify-center border-[1px] bg-white text-gray-700 hover:text-gray-900 font-bold py-1 px-1 rounded"> 
    //     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    //      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
    //         </path>
    //      </svg>
    //   </MenuButton>

    //   <MenuItems transition className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
    //     <div className="">
    //       <MenuItem><Link to="/nutracare_frontend/categories" className="block px-8 py-4 text-sm text-gray-800 data-focus:outline-hidden">
    //          Home
    //         </Link></MenuItem>
    //         <MenuItem><Link to="/nutracare_frontend/categories" className="block px-8 py-4 text-sm text-gray-800 data-focus:outline-hidden">
    //          About
    //         </Link></MenuItem>
    //     </div>
    //   </MenuItems>

//   <button className="flex items-center justify-center border-[1px] bg-white text-gray-700 hover:text-gray-900 font-bold py-1 px-1 rounded">
//          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">


//          </path>
//          </svg>
//       </button> 

   // </Menu> 
   
  )
}

export default NavDropdownButton
