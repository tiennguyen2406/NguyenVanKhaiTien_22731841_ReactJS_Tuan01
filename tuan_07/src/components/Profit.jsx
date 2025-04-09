
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profit() {
    const [currentProfit, setCurrentProfit] = useState(0);
    const [previousProfit, setPreviousProfit] = useState(0);
    const [percentChange, setPercentChange] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('http://localhost:3001/Profit');
            const profits = res.data;

            const currentMonth = new Date().getMonth() + 1;
            let prevMonth = currentMonth - 1;
            if (prevMonth === 0) prevMonth = 12;

            const current = profits.find(p => p.month === currentMonth);
            const previous = profits.find(p => p.month === prevMonth);

            const totalCurrent = current ? current.total_profit : 0;
            const totalPrevious = previous ? previous.total_profit : 0;

            setCurrentProfit(totalCurrent);
            setPreviousProfit(totalPrevious);

            const percent = totalPrevious === 0 ? 100 : ((totalCurrent - totalPrevious) / totalPrevious) * 100;
            setPercentChange(percent.toFixed(2));
        };
        fetchData();
    }, []);

    return (
        <div className="overview">
            <div>
                <h3>Profit</h3>
                <h2 className='profit'>$ {currentProfit}</h2>
                <h3 className='Phantram' style={{ color: percentChange <= 0 ? 'red' : 'green' }}>{percentChange}% period of change</h3>
            </div>
            <div>
                <img src="../img/Button 1529.png" alt="" />
            </div>
        </div>
    );
}

export default Profit;
