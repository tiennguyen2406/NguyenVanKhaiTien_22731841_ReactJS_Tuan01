import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEvent, editEvent, deleteEvent, setSelectedEvent } from '../store/slices/eventSlice';

const EventManager = () => {
  const dispatch = useDispatch();
  const { events, selectedEvent } = useSelector((state) => state.events);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedEvent) {
      dispatch(editEvent({ ...selectedEvent, ...formData }));
      dispatch(setSelectedEvent(null));
    } else {
      dispatch(addEvent(formData));
    }
    setFormData({ title: '', date: '', description: '' });
  };

  return (
    <div className="event-manager">
      <h2>Quản lý sự kiện</h2>
      <div className="event-container">
        <div className="event-form">
          <h3>{selectedEvent ? 'Cập nhật sự kiện' : 'Thêm sự kiện mới'}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label>Tiêu đề</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>
            <div className="form-control">
              <label>Ngày</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                required
              />
            </div>
            <div className="form-control">
              <label>Mô tả</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              {selectedEvent ? 'Cập nhật' : 'Thêm mới'}
            </button>
          </form>
        </div>

        <div className="events-list">
          <h3>Danh sách sự kiện</h3>
          {events.length === 0 ? (
            <p className="no-events">Chưa có sự kiện nào</p>
          ) : (
            <div className="event-grid">
              {events.map(event => (
                <div key={event.id} className="event-card">
                  <div className="event-date">{event.date}</div>
                  <h4>{event.title}</h4>
                  <p>{event.description}</p>
                  <div className="event-actions">
                    <button onClick={() => {
                      dispatch(setSelectedEvent(event));
                      setFormData(event);
                    }}>
                      Sửa
                    </button>
                    <button onClick={() => dispatch(deleteEvent(event.id))}>
                      Xóa
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventManager; 