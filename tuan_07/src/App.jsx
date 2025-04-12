import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import { Routes, Route } from 'react-router-dom';
import DashBoard from './pages/DashBoard';
import Analytics from './pages/Analytics';
import Tearms from './pages/Tearms';
import Intergration from './pages/Intergration';
import Mesage from './pages/Mesage';
import Pj1 from './pages/Pj1';
import OrderDetail from './components/OrderDetail';
import ProfitDetail from './components/ProfitDetail';
import UserDetail from './components/UserDetail';

function App() {
  return (
    <div className="container1">
      <div className="header">
        <Header />
      </div>
      <div className="menu">
        <Menu />
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<DashBoard />}>
            <Route index element={<UserDetail />} />
            <Route path="UserDetail" element={<UserDetail />} />
            <Route path="OrderDetail" element={<OrderDetail />} />
            <Route path="ProfitDetail" element={<ProfitDetail />} />
          </Route>

          <Route path="/Analytics" element={<Analytics />} />
          <Route path="/Intergration" element={<Intergration />} />
          <Route path="/Mesage" element={<Mesage />} />
          <Route path="/Pj1" element={<Pj1 />} />
          <Route path="/Tearms" element={<Tearms />} />
        </Routes>
      </div>
  
    </div>
  );
}

export default App;
