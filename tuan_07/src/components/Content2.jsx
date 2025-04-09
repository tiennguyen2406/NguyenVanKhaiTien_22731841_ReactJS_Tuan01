import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const statusColors = {
  new: "bg-blue-100 text-blue-600",
  "in-progress": "bg-yellow-100 text-yellow-600",
  completed: "bg-green-100 text-green-600",
};

function Content2() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [showAddModal, setShowAddModal] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    gender: '',
    Company: '',
    order_value: '',
    status: 'new',
    date: '',
    img: '../img/Avatar (1).png'
  });
  const usersPerPage = 5;

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:3001/user');
      setUsers(res.data);
    } catch (err) {
      console.error('Lỗi khi lấy dữ liệu user:', err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const res = await fetch(`http://localhost:3001/user/${formData.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const updatedUser = await res.json();
      setUsers(prev => prev.map(user => (user.id === updatedUser.id ? updatedUser : user)));
      onClose();
    } catch (error) {
      console.error('Failed to save', error);
    }
  };

  const handleEditClick = (user) => {
    setFormData(user);
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const handleNewUserChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prev => ({ ...prev, [name]: value }));
  };

  const handleAddUser = async () => {
    try {
      await axios.post('http://localhost:3001/user', {
        ...newUser,
        id: Date.now().toString(),
        order_value: parseFloat(newUser.order_value),
      });
      setShowAddModal(false);
      fetchUsers();
    } catch (error) {
      console.error('Thêm user thất bại:', error);
    }
  };

  const totalPages = Math.ceil(users.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div>
        <div className="header_content2">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="../img/File text 1.png" alt="" />
            <h3 className="text-black text-2xl font-bold">Detailed report</h3>
          </div>
          <div className="flex items-center gap-2">
            <button className="button_header_content2" onClick={() => setShowAddModal(true)}>
              <img src="../img/Download.png" alt="" />
              Import
            </button>
            <button className="button_header_content2">
              <img src="../img/Move up.png" alt="" />
              Export
            </button>
          </div>
        </div>

        {/* Modal thêm user */}
        {showAddModal && (
          <div className="modal-overlay1">
            <div className="modal-box1">
              <h2>Thêm người dùng</h2>
              <input type="text" name="name" placeholder="Tên" value={newUser.name} onChange={handleNewUserChange} />
              <input type="text" name="Company" placeholder="Công ty" value={newUser.Company} onChange={handleNewUserChange} />
              <input type="number" name="order_value" placeholder="Giá trị đơn hàng" value={newUser.order_value} onChange={handleNewUserChange} />
              <input type="date" name="date" value={newUser.date} onChange={handleNewUserChange} />
              <select name="status" value={newUser.status} onChange={handleNewUserChange}>
                <option value="">Chọn trạng thái</option>
                <option value="new">New</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <div className="modal-actions1">
                <button onClick={() => setShowAddModal(false)}>Hủy</button>
                <button onClick={handleAddUser}>Lưu</button>
              </div>
            </div>
          </div>
        )}

        <div className="p-6">
          <div className="bg-white shadow rounded-lg overflow-x-auto">
            <table className="min-w-full text-sm text-black">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="px-4 py-2"></th>
                  <th className="px-4 py-2">CUSTOMER NAME</th>
                  <th className="px-4 py-2">COMPANY</th>
                  <th className="px-4 py-2">ORDER VALUE</th>
                  <th className="px-4 py-2">ORDER DATE</th>
                  <th className="px-4 py-2">STATUS</th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.map((user, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-3">
                      <input type="checkbox" className="custom-checkbox" />
                    </td>
                    <td className="px-4 py-3 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                        <img src={user.img} alt={user.name} className="w-full h-full object-cover" />
                      </div>
                      {user.name}
                    </td>
                    <td className="px-4 py-3">{user.Company}</td>
                    <td className="px-4 py-3">${user.order_value.toLocaleString()}</td>
                    <td className="px-4 py-3">{user.date}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${statusColors[user.status]}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="custom-button" onClick={() => handleEditClick(user)}>
                        <img src="../img/create.png" alt="Edit" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="p-4 flex justify-between items-center">
              <span className="text-sm">{users.length} results</span>
              <div className="flex items-center gap-2">
                <button className="page-button" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
                  &lt;
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    className={`page-button ${currentPage === i + 1 ? 'bg-pink-500 text-white' : ''}`}
                    onClick={() => goToPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
                <button className="page-button" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </div>

        {isOpen && formData.name !== undefined && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Chỉnh sửa người dùng</h2>
              <p className="modal-field">
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
              </p>
              <p className="modal-field">
                Company:
                <input type="text" name="Company" value={formData.Company} onChange={handleChange} placeholder="Company" />
              </p>
              <p className="modal-field">
                Status:
                <input type="text" name="status" value={formData.status} onChange={handleChange} placeholder="Status" />
              </p>
              <div className="modal-buttons">
                <button onClick={onClose}>Hủy</button>
                <button onClick={handleSave}>Lưu</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Content2;