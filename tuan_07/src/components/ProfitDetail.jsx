import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProfitDetail() {
    const [profits, setProfits] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const profitsPerPage = 5;

    useEffect(() => {
        axios.get('http://localhost:3001/Profit')
            .then(res => setProfits(res.data))
            .catch(err => console.error('Lỗi khi lấy dữ liệu profit:', err));
    }, []);

    const totalPages = Math.ceil(profits.length / profitsPerPage);
    const indexOfLast = currentPage * profitsPerPage;
    const indexOfFirst = indexOfLast - profitsPerPage;
    const currentProfits = profits.slice(indexOfFirst, indexOfLast);

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="p-6">
            <div className="bg-white shadow rounded-lg overflow-x-auto">
                <h2 className="text-xl font-bold mb-4">Báo cáo lợi nhuận</h2>
                <table className="min-w-full text-sm text-black">
                    <thead className="bg-gray-100 text-left">
                        <tr>
                            <th className="px-3 py-3">ID</th>
                            <th className="px-3 py-3">Tháng</th>
                            <th className="px-3 py-3">Năm</th>
                            <th className="px-3 py-3">Tổng lợi nhuận</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentProfits.map((item, index) => (
                            <tr key={index} className="border-t">
                                <td className="px-3 py-5">{item.id}</td>
                                <td className="px-3 py-5">{item.month}</td>
                                <td className="px-3 py-5">{item.year}</td>
                                <td className="px-3 py-5">${item.total_profit.toLocaleString()}</td>
                            </tr>
                        ))}
                        {currentProfits.length === 0 && (
                            <tr>
                                <td colSpan="4" className="text-center text-gray-500 py-6 italic">
                                    Không có dữ liệu.
                                </td>
                            </tr>
                        )}
                    </tbody>


                </table>

                {/* Phân trang */}
                {totalPages > 1 && (
                    <div className="p-4 flex justify-between items-center">
                        <span className="text-sm">{profits.length} kết quả</span>
                        <div className="flex items-center gap-2">
                            <button
                                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                onClick={() => goToPage(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                &lt;
                            </button>
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i}
                                    className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-pink-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                                    onClick={() => goToPage(i + 1)}
                                >
                                    {i + 1}
                                </button>
                            ))}
                            <button
                                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                onClick={() => goToPage(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                &gt;
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProfitDetail;
