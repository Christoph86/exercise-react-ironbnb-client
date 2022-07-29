function CreateApartment() {

    return (
        <>
            <p>This is the CreateApartment</p>

            <form action={process.env.REACT_APP_API_BASE_URL + '/apartments'} method="POST">
                <label >Image
                    <input name="img" type="url" accept="image/png, image/gif, image/jpeg" />
                </label>
                <label htmlFor="pricePerDay">Price per Day:
                    <input name="pricePerDay" type="number" />
                </label>
                <label htmlFor="title">Title:
                    <input name="title" type="text" />
                </label>
                <button type="submit">Create Apartment</button>
            </form>
        </>
    )

}

export default CreateApartment;