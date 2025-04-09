import React from 'react';
import Order from './Order';
import Profit from './Profit';
import User from './User';

function Overview() {
    return (
        <div className="content_overview">
            <div className='logo_content'>
                <img src="../img/Squares four 1.png" alt="" />
                <h2>Overview</h2>
            </div>
            <div className="content_overview_all">
                <Order />
                <Profit />
                <User />
            </div>
        </div>
    );
}

export default Overview;