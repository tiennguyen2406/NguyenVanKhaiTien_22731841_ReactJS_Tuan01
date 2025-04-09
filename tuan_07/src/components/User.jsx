
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function User() {
    const [currentUserNew, setCurrentUserNew] = useState(0);
    const [previousUserNew, setPreviousUserNew] = useState(0);
    const [percentChange, setPercentChange] = useState(0);

    useEffect(() => {
        const fetchUsers = async () => {
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

            setPercentChange(percent.toFixed(2));
        };
        fetchUsers();
    }, []);

    return (
        <div className="overview">
            <div>
                <h3>New customers</h3>
                <h2 className='new_customers'>{currentUserNew}</h2>
                <h3 className='Phantram' style={{ color: percentChange <= 0 ? 'red' : 'green' }}>{percentChange}% period of change</h3>
            </div>
            <div>
                <img src="../img/Button 1530.png" alt="" />
            </div>
        </div>
    );
}

export default User;
