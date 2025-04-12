import Overview from "../components/Overview";
import React from 'react';
import { Outlet } from 'react-router-dom';
function DashBoard() {
    return (
        <div>
            <Overview></Overview>
            {/* <Outlet />   */}
        </div>
    );
}
export default DashBoard;