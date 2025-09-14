import React, {useState, useEffect} from 'react'
import axios from 'axios';
import SectionHeading from "../components/SectionHeading"
import sliderImg from '../assets/images/background-images/b6.jpg'
import CenterCard from "../components/CenterCard";

const SililarCenters = () => {

 const[centersList, setCentersList] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
          setCentersList(res.data);
          setLoading(false);
        }
      )
        .catch((err)=>{
          console.log(err);
          setError(error);
          setLoading(false);
        }
        )
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
  if (loading) return <div>Loading data...</div>;
  if (error) return <div>Error: {error.message}</div>;

      const allCenters = centersList.map((e)=>{
              return(
                <div className="mb-6">
                   <CenterCard key={e.id} cardImage={sliderImg} centerName={e.company.name} email={e.email} address={e.address.city}/>
                </div>
           
                    )
      })

  return (
     <div className="w-full">
      
      <div className="my-[50px]">
         <SectionHeading name="Similar Centers" />
      </div>
      <div className="w-[90%] m-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-5">
          {allCenters}
      </div>
      
      

    </div>
  )
}

export default SililarCenters
