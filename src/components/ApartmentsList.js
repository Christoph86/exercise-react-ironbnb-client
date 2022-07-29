import axios from 'axios';
import { useEffect, useState } from 'react';

function ApartmentsList(){

    const [apartments, setApartments] = useState(null);

    useEffect( () => {
        fetchApartments();
      }, []);

    const fetchApartments = () => {
        axios
          .get(process.env.REACT_APP_API_BASE_URL + '/apartments')
          .then((response) => {
            setApartments(response.data);
            console.log("axios response:",response.data);
          })
          .catch((e) => {
            console.log(e);
          });
      }




    return <p>This is the ApartmentsList</p>
}

export default ApartmentsList;