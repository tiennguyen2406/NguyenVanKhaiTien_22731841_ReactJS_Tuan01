import React from 'react';
function ModalUpdate({ show, onClose, onChange, onSave, userData }) {
    if (!show || !userData.name) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Chỉnh sửa người dùng</h2>
          <p className="modal-field">
            Name:
            <input type="text" name="name" value={userData.name} onChange={onChange} />
          </p>
          <p className="modal-field">
            Company:
            <input type="text" name="Company" value={userData.Company} onChange={onChange} />
          </p>
          <p className="modal-field">
            Status:
            <input type="text" name="status" value={userData.status} onChange={onChange} />
          </p>
          <div className="modal-buttons">
            <button onClick={onClose}>Hủy</button>
            <button onClick={onSave}>Lưu</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default ModalUpdate;