import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Navbar from '../HomePage/Navbar/Navbar';
import Payment from '../Payment/Payment';


const CheckOut = () => {
    const { title} = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [services, setServices] = useState([])


    useEffect(() => {

        fetch('https://immense-bayou-68819.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [services])

    let serviceType = services.find(serviceType => serviceType.title === title);

    const addToCart = () => {
        const newAddToCart = { ...loggedInUser, ...serviceType, orderTime: new Date(), status: 'pending'};
        delete newAddToCart._id

        fetch('https://immense-bayou-68819.herokuapp.com/addToCart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newAddToCart)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Order Placed Successfully')
                }
            })
    }

    return (
        <div style={{backgroundColor:'#243b55', height:'820px'}}>
            <Navbar/>
            <div className="row d-flex justify-content-center m-5 p-5">
                <div className="col-md-5" >
                    <table className="table table-hover table-striped table-secondary">
                        <thead>
                            <tr>
                                <th scope="col">Package Name</th>
                                <th scope="col"></th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="fw-bolder">{title}</td>
                                <td className="ps-4 fw-bolder"></td>
                                <td className="fw-bolder">{serviceType && serviceType.price + '$'}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="col-md-12  d-flex justify-content-end">
                        <button onClick={addToCart} className="btn btn-secondary btn-lg" >Add To Cart</button>
                    </div>
                </div>
                <div className="col-md-7">
                    <h1 className="mb-2 text-danger">Payment First</h1>
                    <Payment/>
                </div>

            </div>
        </div>

    );
};

export default CheckOut;