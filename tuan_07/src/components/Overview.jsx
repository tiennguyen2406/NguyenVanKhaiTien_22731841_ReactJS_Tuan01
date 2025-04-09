import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Content1() {
    const [currentRevenue, setCurrentRevenue] = useState(0);
    const [previousRevenue, setPreviousRevenue] = useState(0);
    const [percentChange, setPercentChange] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:3001/order');
                const orders = res.data;

                const today = new Date();
                const currentMonth = today.getMonth() + 1;
            
                // Xử lý tháng trước
                let prevMonth = currentMonth - 1;
                if (prevMonth === 0) {
                    prevMonth = 12;
                }

                const currentOrders = orders.filter(o =>
                    o.month === currentMonth
                );
                const previousOrders = orders.filter(o =>
                    o.month === prevMonth
                );

                const totalCurrent = currentOrders.reduce((sum, o) => sum + o.price * o.quantity, 0);
                const totalPrevious = previousOrders.reduce((sum, o) => sum + o.price * o.quantity, 0);

                setCurrentRevenue(totalCurrent);
                setPreviousRevenue(totalPrevious);

                const percent = totalPrevious === 0 ? 100 : ((totalCurrent - totalPrevious) / totalPrevious) * 100;
                setPercentChange(percent.toFixed(2));
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    //profit
    const [currentProfit, setCurrentProfit] = useState(0);
    const [previousProfit, setPreviousProfit] = useState(0);
    const [percent_profittChange, setPercent_profitChange] = useState(0);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:3001/Profit');
                const profits = res.data;

                const today = new Date();
                const currentMonth = today.getMonth() + 1;

                let prevMonth = currentMonth - 1;
        
                if (prevMonth === 0) {
                    prevMonth = 12;
                }

                const current = profits.find(p => p.month === currentMonth);
                const previous = profits.find(p => p.month === prevMonth);

                const totalCurrent = current ? current.total_profit : 0;
                const totalPrevious = previous ? previous.total_profit : 0;

                setCurrentProfit(totalCurrent);
                setPreviousProfit(totalPrevious);

                const percent = totalPrevious === 0
                    ? 100
                    : ((totalCurrent - totalPrevious) / totalPrevious) * 100;

               setPercent_profitChange(percent.toFixed(2));
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // user
    const [currentUserNew, setCurrentUserNew] = useState(0);
    const [previousUserNew, setPreviousUserNew] = useState(0);
    const [percent_userChange, setPercentUserChange] = useState(0);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get('http://localhost:3001/user');
                const users = res.data;

                const currentMonth = new Date().getMonth() + 1;
                let previousMonth = currentMonth - 1;
                if (previousMonth === 0) previousMonth = 12;

                const current = users.filter(user => user.status === 'new');
                const previous = users.filter(user => user.status === 'completed');

                setCurrentUserNew(current.length);
                setPreviousUserNew(previous.length);

                const percent = previous.length === 0
                    ? 100
                    : ((current.length - previous.length) / previous.length) * 100;

                setPercentUserChange(percent.toFixed(2));
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    
    return (
        <div className="content_overview">
            <div className='logo_content'>
                <img src="../img/Squares four 1.png" alt="" />
                <h2>Overview</h2>
            </div>
            <div className="content_overview_all">
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
                <div className="overview">
                    <div>
                        <h3>Profit</h3>
                        <h2 className='profit'>$ {currentProfit}</h2>
                        <h3 className='Phantram' style={{ color: percent_profittChange <= 0 ? 'red' : 'green' }}>{percent_profittChange}% period of change</h3>
                    </div>
                    <div>
                        <img src="../img/Button 1529.png" alt="" />
                    </div>
                </div>
                <div className="overview">
                    <div>
                        <h3>New customers</h3>
                        <h2 className='new_customers'>{currentUserNew}</h2>
                        <h3 className='Phantram' style={{ color: percent_userChange <= 0 ? 'red' : 'green' }}>{percent_userChange} %period of change</h3>
                    </div>
                    <div>
                        <img src="../img/Button 1530.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content1;