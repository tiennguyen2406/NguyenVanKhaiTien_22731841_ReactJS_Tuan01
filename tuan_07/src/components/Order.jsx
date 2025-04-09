
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Order() {
    const [currentRevenue, setCurrentRevenue] = useState(0);
    const [previousRevenue, setPreviousRevenue] = useState(0);
    const [percentChange, setPercentChange] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('http://localhost:3001/order');
            const orders = res.data;

            const today = new Date();
            const currentMonth = today.getMonth() + 1;
            let prevMonth = currentMonth - 1;
            if (prevMonth === 0) prevMonth = 12;

            const currentOrders = orders.filter(o => o.month === currentMonth);
            const previousOrders = orders.filter(o => o.month === prevMonth);

            const totalCurrent = currentOrders.reduce((sum, o) => sum + o.price * o.quantity, 0);
            const totalPrevious = previousOrders.reduce((sum, o) => sum + o.price * o.quantity, 0);

            setCurrentRevenue(totalCurrent);
            setPreviousRevenue(totalPrevious);

            const percent = totalPrevious === 0 ? 100 : ((totalCurrent - totalPrevious) / totalPrevious) * 100;
            setPercentChange(percent.toFixed(2));
        };
        fetchData();
    }, []);

    return (
        <div className="overview">
            <div>
                <h3>Turnover</h3>
                <h2>${currentRevenue}</h2>
                <h3 className='Phantram' style={{ color: percentChange <= 0 ? 'red' : 'green' }}>{percentChange}% period of change</h3>
            </div>
            <div>
                <img src="../img/Button 1509.png" alt="" />
            </div>
        </div>
    );
}

export default Order;
