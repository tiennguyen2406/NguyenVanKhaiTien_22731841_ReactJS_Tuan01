import React from 'react';

function ModalAdd({ show, onClose, onChange, onSave, userData }) {
    if (!show) return null;
  
    return (
      <div className="modal-overlay1">
        <div className="modal-box1">
          <h2>Thêm người dùng</h2>
          <input type="text" name="name" placeholder="Tên" value={userData.name} onChange={onChange} />
          <input type="text" name="Company" placeholder="Công ty" value={userData.Company} onChange={onChange} />
          <input type="number" name="order_value" placeholder="Giá trị đơn hàng" value={userData.order_value} onChange={onChange} />
          <input type="date" name="date" value={userData.date} onChange={onChange} />
          <select name="status" value={userData.status} onChange={onChange}>
            <option value="">Chọn trạng thái</option>
            <option value="new">New</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <div className="modal-actions1">
            <button onClick={onClose}>Hủy</button>
            <button onClick={onSave}>Lưu</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default ModalAdd;