import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AllOrdersInfo from '../All OrdersInfo/AllOrdersInfo';
import Sidebar from '../Sidebar/Sidebar';



const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {

        fetch('https://immense-bayou-68819.herokuapp.com/allOrder')
            .then(res => res.json())
            .then(data => setAllOrders(data))

    }, [])

    return (
        <div style={{backgroundColor:'#243b55'}} className="row">
            <div className="col-md-3 col-sm-6 col-12">
                <Sidebar/>
            </div>
            <div className="col-md-7 col-sm-12 col-12">
                <h1 className="mt-5 text-center">Your Total Pending Orders: <span className="text-danger">{allOrders.length}</span></h1>
                {
                    allOrders.map(allOrder => <AllOrdersInfo allOrder={allOrder}></AllOrdersInfo>)
                }
            </div>

        </div>


    );
};

export default AllOrders;