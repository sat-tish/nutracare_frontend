

const SelectCity = () => {

const cityList = ["Select City",
      "Toronto",	
      "Montréal",	
      "Vancouver",	
      "Ottawa",	
      "Edmonton",	
      "Calgary",
      "Quebéc",	
      "Winnipeg",	
      "Hamilton",	
      "London",
      "Kitchener",	
      "St Catharines",
      "Halifax",	
      "Victoria",	
      "Windsor",	
      "Oshawa",
      "Saskatoon",	
      "Regina",	
      "St John's",
      "Sudbury",
      "Chicoutimi",	
      "Sherbrooke",	
      "Kingston",	
      "Trois-Rivières",	
      "Kelowna",	
      "Abbotsford",	
      "Saint John",	
      "Thunder Bay",
      "Barrie",	
      "Sydney"];
      const allCities = cityList.map((element, index)=>{
        return(
          <option value="" key={index}>{element}</option>
        )
      });

  return (
    <div className="relative">
  <select className="block appearance-none w-full bg-white border border-gray-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-state">
    {allCities}
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>
  )
}

export default SelectCity
