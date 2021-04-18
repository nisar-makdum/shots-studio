import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const divStyle = {
    height:'830px',
    backgroundColor:'#243b55'
}


const AddAdmin = () => {
    const { handleSubmit, register } = useForm();

    const onSubmit = data => {
        const adminData = {
            name: data.name,
            email: data.email,
        }

        const url = 'https://immense-bayou-68819.herokuapp.com/addAdmin'

        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(adminData)
        })
            .then(res => console.log('server side', res))
    };
    return (
        <div>
            <div style={divStyle} className="row">
                <div style={{backgroundColor:'#243b55'}} className="col-md-3 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div style={{backgroundColor:'#243b55'}} className="col-md-7 col-sm-12 col-12">
                    <div className="text-center">
                        <h1 className="text-dark">Add Admin</h1>
                    </div>
                    <form className=" mt-5 m-5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-md-8">
                            <label for="name" className="form-label text-dark"><h4>Admin Name</h4></label>
                            <input name="name" ref={register} className="form-control" placeholder="Name" />
                        </div>
                        <div className="col-md-8 mt-4">
                            <label for="email" className="form-label text-dark"><h4>Admin Email</h4></label>
                            <input name="email" className="form-control" placeholder="Email" ref={register} />
                        </div>
                        <div className="col-12 d-flex justify-content-start">
                            <button className="mt-4 btn btn-danger btn-lg " type="submit" >Add Admin</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;