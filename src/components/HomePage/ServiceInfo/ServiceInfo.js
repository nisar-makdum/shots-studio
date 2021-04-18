import React from 'react';
import { useHistory } from 'react-router';

const ServiceInfo = (props) => {
    const { title, description, image, price } = props.service


    const history = useHistory()
    const handleBuy = (title) => {
        history.push(`/checkOut/${title}`)
    }
    return (
        <div class="card mb-3 me-5 col-md-5">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={image} alt="..." className="img-fluid" />
                    <button onClick={() => handleBuy(title)} className="btn btn-danger btn-lg m-3">Book</button>
                </div>
                <div class="col-md-5">
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text ml-3">{description}</p>
                        <h5>Price : ${price}</h5>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ServiceInfo;