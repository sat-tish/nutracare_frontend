

const Category = () => {
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
    <div class="relative w-[90%] m-auto">
  <select class="block appearance-none w-full bg-white border border-gray-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-state">
    {categoriesAll}
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>
  )
}

export default Category
