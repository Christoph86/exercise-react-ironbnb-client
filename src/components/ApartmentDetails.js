import axios from 'axios';
import { useEffect, useState } from 'react';
//import { NavLink } from 'react-router-dom';
import { NavLink, useParams } from 'react-router-dom'

function ApartmentDetails(props) {

  const { apartmentId } = useParams();
  console.log("apart id:",apartmentId);
  const [apartment, setApartment] = useState(null);

  useEffect(() => {
    fetchApartment();
  }, []);

  const fetchApartment = () => {
    axios
      .get(process.env.REACT_APP_API_BASE_URL + '/apartments/' + apartmentId)
      .then((response) => {
        setApartment(response.data);
        console.log("axios singleApartment response:", response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }


  const renderApartment = () => {
      return (
        <div className='apartment'>
          <img src={apartment.img} alt="no image of..."></img>
          <p>Title: {apartment.title}</p>
          <p>Price per Day: {apartment.pricePerDay}</p>
        </div>
      );
  }



  return (
    <><p>This is the ApartmentDetails</p>
      {apartment === null
        ? <p>loading...</p>
        : renderApartment()
      }
    </>
  )

}

export default ApartmentDetails;

// function ApartmentDetails(){
//     return <p>This is the ApartmentDetails</p>
// }

// export default ApartmentDetails;