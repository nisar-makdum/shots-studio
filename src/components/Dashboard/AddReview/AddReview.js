import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';


const divStyle = {
    height:"830px",
    backgroundColor:"#243b55"
}
const AddReviews = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    let display;
    if (loggedInUser) {
        display = <li style={{ marginLeft: '50px', fontWeight: 'bold' }} className="nav-item pt-2">
            {loggedInUser.name}
        </li>
    }


    const { handleSubmit, register } = useForm();
  


    const onSubmit = data => {
        const serviceData = {
            name: data.name,
            from: data.from,
            description: data.description
        }

        const url = 'https://immense-bayou-68819.herokuapp.com/addReview'

        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(serviceData)
        })
            .then(res => console.log('server side', res))
    };

    return (
        <div >
            <div style={divStyle} className="row">
                <div className="col-md-3 col-sm-6 col-12">
                    <Sidebar/>
                </div>
                <div style={{backgroundColor:"#243b55"}} className="col-md-7 col-sm-12 col-12">
                    <div className="text-center">
                        <h1>Add Your Review</h1>
                    </div>
                    <form className="row mt-5 m-5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-md-6">
                            <label for="name" className="form-label"><h4>Name</h4></label>
                            <input name="name" ref={register} placeholder="Name" className="form-control" id="inputEmail4" />
                        </div>
 
                        <div className="col-md-6">
                            <label for="description" className="form-label"><h4>Review</h4></label>
                            <input name="description" className="form-control" placeholder="Review" ref={register} id="inputEmail4" />
                        </div>

                        <div className="col-12 d-flex justify-content-end">
                            <button className="mt-4 btn btn-danger btn-lg " type="submit" >Add Reviews</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReviews;