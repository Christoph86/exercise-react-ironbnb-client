import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function CreateApartment(props) {

    const [img, setImg] = useState("")
    const [pricePerDay, setPricePerDay] = useState("")
    const [title, setTitle] = useState("")

    const test =useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const newApartment = {
            img,
            pricePerDay,
            title
          }

        axios
        .post(process.env.REACT_APP_API_BASE_URL + '/apartments', newApartment)
        .then((response) => {
          console.log("axios create post response:",response.data);
        //   <Navigate to={process.env.REACT_APP_API_BASE_URL + '/apartments'} replace={true} />
        test("/apartments")
        })
        .catch((e) => {
          console.log(e);
        });

      }

    return (
        <>
            <p>This is the CreateApartment</p>

            {/* <form action={process.env.REACT_APP_API_BASE_URL + '/apartments'} method="POST"> */}
            <form onSubmit={handleSubmit}>
                <label>Image
                    <input name="img" type="url" onChange={(e) => {setImg(e.target.value)}}/>
                </label>
                <label>Price per Day:
                    <input name="pricePerDay" type="number" onChange={(e) => {setPricePerDay(e.target.value)}} />
                </label>
                <label>Title:
                    <input name="title" type="text" onChange={(e) => {setTitle(e.target.value)}}/>
                </label>
                <button type="submit">Create Apartment</button>
            </form>
        </>
    )

}

export default CreateApartment;