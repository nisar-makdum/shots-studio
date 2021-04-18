import React from 'react';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReviewDetails = (props) => {
    const { description, name} = props.review;
    return (
        <div className="card shadow-lg">
            <div className="card-header d-flex  align-items-center">
                <div>
                    <h6 className="text-danger">{name}</h6>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-secondary mt-4">{description}</p>
                <FontAwesomeIcon icon={faStar} style={{ color: '#ff922b' }} />
                <FontAwesomeIcon icon={faStar} style={{ color: '#ff922b' }} />
                <FontAwesomeIcon icon={faStar} style={{ color: '#ff922b' }} />
                <FontAwesomeIcon icon={faStar} style={{ color: '#ff922b' }} />
                <FontAwesomeIcon icon={faStarHalf} style={{ color: '#ff922b' }} />
            </div>
            
       </div>
    );
};

export default ReviewDetails;