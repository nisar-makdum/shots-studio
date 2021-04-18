import React, { useEffect, useState } from 'react';
import ServiceInfo from '../ServiceInfo/ServiceInfo';

const Service = () => {
    const [services, setServices] = useState([])
    useEffect(() => {

        fetch('https://immense-bayou-68819.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    return (
        <div className="mt-5">
            <div className="text-center">
                <h1 className="text-danger">SERVICES</h1>                
            </div>
                <div className="row d-flex justify-content-center mt-5">
                {
                    services.map(service => <ServiceInfo service={service}></ServiceInfo>)
                }
            </div>
        </div>

    );
};

export default Service;