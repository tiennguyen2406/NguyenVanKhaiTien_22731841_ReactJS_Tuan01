import React, { useEffect, useState } from 'react';
import axios from 'axios';

function OrderDetail() {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;

  useEffect(() => {
    axios.get('http://localhost:3001/order')
      .then(res => setOrders(res.data))
      .catch(err => console.error('Lỗi khi lấy dữ liệu order:', err));
  }, []);

  // Phân trang
  const totalPages = Math.ceil(orders.length / ordersPerPage);
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-6">
      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <h2 className="text-xl font-bold mb-4">Chi tiết đơn hàng</h2>
        <table className="min-w-full text-sm text-black">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-4">ID</th>
              <th className="px-4 py-4">Giá</th>
              <th className="px-4 py-4">Số lượng</th>
              <th className="px-4 py-4">Tháng</th>
              <th className="px-4 py-4">Năm</th>
              <th className="px-4 py-4">Tổng tiền</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-4">{item.id}</td>
                <td className="px-4 py-4">${item.price}</td>
                <td className="px-4 py-4">{item.quantity}</td>
                <td className="px-4 py-4">{item.month}</td>
                <td className="px-4 py-4">{item.year}</td>
                <td className="px-4 py-4 font-medium text-green-700">
                  ${(item.price * item.quantity).toLocaleString()}
                </td>
              </tr>
            ))}
            {currentOrders.length === 0 && (
              <tr>
                <td colSpan="6" className="px-4 py-6 text-center text-gray-500 italic">
                  Không có dữ liệu đơn hàng.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Thanh phân trang */}
        <div className="p-4 flex justify-between items-center">
          <span className="text-sm">{orders.length} kết quả</span>
          <div className="flex gap-2">
            <button
              className="px-3 py-1 border rounded disabled:opacity-50"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={`px-3 py-1 border rounded ${currentPage === i + 1 ? 'bg-pink-500 text-white' : ''}`}
                onClick={() => goToPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className="px-3 py-1 border rounded disabled:opacity-50"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
