import React from 'react';
import Orders from '../Orders/Orders';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div>
        <div style={{height:'900px',backgroundColor:'#243b55'}} className="row">
            <div className="col-md-3 col-sm-6 col-12">
                <Sidebar/>
            </div>
           <div className="col-md-7 col-sm-12 col-12">
                <Orders/>
            </div>
        </div>
    </div>
    );
};

export default Dashboard;