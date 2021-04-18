import React from 'react';
import Tanshin from '../../../images/Tanshin.jpg';
import Abrar from '../../../images/Abrar.jpg';
import Rana from '../../../images/Rana.jpg';

const Expertise = () => {
    return (
        <div className="mt-5">
            <div className="text-center">
                <h1 className=" text-danger" style={{ fontSize: "50px" }}>Photography Expertise</h1>
            </div>
            <div className="row d-flex justify-content-center mt-5">
                <div className="col-md-3">
                    <div class="card bg-dark text-white">
                        <img src={Tanshin} class="card-img" alt="..." />
                        <div class="card-img-overlay">

                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card bg-dark text-white">
                        <img src={Rana} class="card-img" alt="..." />
                        <div class="card-img-overlay">

                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card bg-dark text-white">
                        <img src={Abrar} class="card-img img-fluid" alt="..." />
                        <div class="card-img-overlay ">
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Expertise;