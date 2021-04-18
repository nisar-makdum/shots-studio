import React from 'react';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HandleServiceDetails = (props) => {
    const { _id, title, price} = props.pd
    const handleDelete = (id) => {
        fetch(`https://immense-bayou-68819.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('deleted')
            })
        console.log(id)
    }
    return (
        <div>
            <div className="m-5">
                <ul className="list-group">
                    <li className="list-group-item list-group-item-dark"><span className="fw-bolder text-dark">Package Name : {title} </span></li>
                    <li className="list-group-item"><span className="fw-bolder text-dark">Package Price : {price} $</span> </li>
                    <li onClick={() => handleDelete(_id)} className="list-group-item "><span className="btn btn-danger fw-bolder text-dark"><FontAwesomeIcon icon={faTrashAlt} />  Delete Package</span></li>
                </ul>
            </div>
        </div>
    );
};

export default HandleServiceDetails;