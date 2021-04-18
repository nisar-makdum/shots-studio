import React, {useEffect, useState } from 'react';


const AllOrdersInfo = (props) => {
    const { status, _id, name, title, price} = props.allOrder

    const [orderServices, setOrderServices] = useState([]);

    useEffect(() => {
        fetch('https://immense-bayou-68819.herokuapp.com/cart')
            .then(res => res.json())
            .then(data => setOrderServices(data))
    }, [])


    const handleUpdate = (status, id) => {
        fetch(`https://immense-bayou-68819.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
        console.log(status, id)
    }
    return (
        <div className="mt-3">
            <ul className="list-group">
                <li className="list-group-item list-group-item-danger"><span className="fw-bolder text-dark">Name : {name} </span></li>
                <li className="list-group-item "><span className="fw-bolder text-dark">Package Name : {title} </span> </li>
                <li className="list-group-item "><span className="fw-bolder text-dark">Package Price : {price} $</span> </li>
                <li className="list-group-item ">
                    {status !== "Pending" && <button onClick={() => handleUpdate('pending', _id)} className="btn btn-danger fw-bold text-white">Pending</button>}
                    {status !== "On Going" && <button onClick={() => handleUpdate('going', _id)} className="btn btn-danger fw-bold ms-3 text-white">On Going</button>}
                    {status !== "Done" && <button onClick={() => handleUpdate('done', _id)} className="btn btn-success text-white fw-bold ms-3">Done</button>}
                </li>

            </ul>
        </div>
    );
};

export default AllOrdersInfo;