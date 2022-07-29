import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function ApartmentsList() {

  const [apartments, setApartments] = useState(null);

  useEffect(() => {
    fetchApartments();
  }, []);

  const fetchApartments = () => {
    axios
      .get(process.env.REACT_APP_API_BASE_URL + '/apartments')
      .then((response) => {
        setApartments(response.data);
        console.log("axios response:", response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }


  const renderApartments = () => {
    const result = apartments.map(e => {
      return (
        <div className='apartment'>
          <img src={e.img} alt="no image of..."></img>
          <p>Title: {e.title}</p>
          <p>Price per Day: {e.pricePerDay}</p>
          <NavLink to={`/apartments/${e._id}`}>More Details</NavLink>
        </div>
      );
    });

    return result;
  }



  return (
    <>
      {apartments === null
        ? <p>loading...</p>
        : renderApartments()
      }
    </>
  )

}

export default ApartmentsList;