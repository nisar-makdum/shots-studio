import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';



const divStyle = {
    height:'820px',
    backgroundColor:'#243b55'
}
const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    let display;
    if (loggedInUser) {
        display = <li style={{ marginLeft: '50px', fontWeight: 'bold' }} className="nav-item pt-2">
            {loggedInUser.name}
        </li>
    }


    const { handleSubmit, register } = useForm();
    const [imageURL, setImageURL] = useState(null)


    const onSubmit = data => {
        const serviceData = {
            title: data.title,
            description: data.description,
            price: data.price,
            image: imageURL
        }

        const url = 'https://immense-bayou-68819.herokuapp.com/addService'

        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(serviceData)
        })
            .then(res => console.log('server side', res))
    };


    const handleImageUpload = (event) => {
        console.log(event.target.files[0])
        const image = event.target.files[0]
        const imageData = new FormData();
        imageData.set('key', 'd38c20b1dd8c6b63a7ca27a46c836382');
        imageData.append('image', image)

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div style={divStyle} className="row">
            <div className="col-md-3 col-sm-6 col-12">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-7 col-sm-12 col-12">
                <div className="text-center">
                    <h1>Add Service</h1>
                </div>
                <form className="row mt-5 m-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-6">
                        <label for="title" className="form-label "><h4>Service Name</h4></label>
                        <input name="title" ref={register} className="form-control" placeholder="Name" />
                    </div>
                    <div className="col-md-6">
                        <label for="description" className="form-label"><h4>Service Details</h4></label>
                        <input name="description" className="form-control" ref={register} placeholder="Service details" />
                    </div>
                    <div className="col-md-6 mt-3">
                        <label for="price" className="form-label"><h4>Price</h4></label>
                        <input name="price" className="form-control" ref={register} placeholder="Price" />
                    </div>
                    <div className="col-md-6 mt-3">
                        <label className="form-label"><h4>Insert Image</h4></label>
                        <input className="form-control" type="file" onChange={handleImageUpload} id="formFile" />
                    </div>
                    <div className="col-12 d-flex justify-content-end">
                        <button className="mt-4 btn btn-danger btn-lg " type="submit" >Add Service</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Admin;