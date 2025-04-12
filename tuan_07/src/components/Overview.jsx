import React from 'react';
import Order from './Order';
import Profit from './Profit';
import User from './User';
import { useNavigate } from 'react-router-dom';

function Overview() {
    const navigate = useNavigate();
    return (
        <div className="content_overview">
            <div className='logo_content'>
                <img src="../img/Squares four 1.png" alt="" />
                <h2>Overview</h2>
            </div>
            <div
                style={{ border: "1px solid black" }}
                className="content_overview_all flex justify-between divide-x"
            >
                <div onClick={() => navigate('/OrderDetail')} className="flex-1 px-4">
                    <Order />
                </div>
                <div onClick={() => navigate('/ProfitDetail')} className="flex-1 px-4">
                    <Profit />
                </div>
                <div onClick={() => navigate('/UserDetail')} className="flex-1 px-4">
                    <User />
                </div>
            </div>
        </div>
    );
}

export default Overview;