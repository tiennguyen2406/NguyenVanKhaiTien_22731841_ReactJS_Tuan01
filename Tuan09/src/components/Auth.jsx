import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../store/slices/authSlice';

const Auth = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ id: Date.now().toString(), username, email }));
  };

  if (isLoggedIn && user) {
    return (
      <div className="auth-container user-info">
        <h2>Xin chào, {user.username}!</h2>
        <p>{user.email}</p>
        <button className="logout-button" onClick={() => dispatch(logout())}>
          Đăng xuất
        </button>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <h2>Đăng nhập</h2>
      <form className="auth-form" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Tên đăng nhập"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
};

export default Auth; 