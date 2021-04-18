import React, {useEffect, useState } from 'react';
import HandleServiceDetails from '../HandleServiceDetails/HandleServiceDetails';
import Sidebar from '../Sidebar/Sidebar';

const HandleServices = () => {

   const [handleServices, setHandleServices] = useState([])
    useEffect(() => {

        fetch('https://immense-bayou-68819.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setHandleServices(data))

    }, [handleServices])
    return (
        <div style={{backgroundColor:'#243b55'}} className="row">
            <div className="col-md-3 col-sm-6 col-12">
                <Sidebar/>
            </div>
            <div style={{height:'900px'}} className="col-md-7 col-sm-12 col-12">
                <h1 className="text-center text-dark"> You Have <span className="text-danger">{handleServices.length}</span> Packages Available.</h1>
                {
                    handleServices.map(pd => <HandleServiceDetails pd={pd}></HandleServiceDetails>)
                }
            </div>
        </div>
    );
};

export default HandleServices;