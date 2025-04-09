import './App.css'
import Header from './components/Header';
import Menu from './components/Menu';
import Overview from './components/Overview';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashBoard from './pages/DashBoard';
import Analytics from './pages/Analytics';
import Tearms from './pages/Tearms';
import Intergration from './pages/Intergration';
import Mesage from './pages/Mesage';
import pj1 from './pages/pj1';

function App() {

  return (
    <>
      <div className="container1">
        <div className="header">
          {/* <Header></Header> */}
        </div>
        <div className="menu">
          {/* <Menu></Menu> */}
        </div>
        <div className="navbar">
          {/* <Overview></Overview> */}
        </div>
        <div className="content">
          {/* <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/Analytics" element={<Analytics />} />
            <Route path="/Intergration" element={<Intergration />} />
            <Route path="/Mesage" element={<Mesage />} />
            <Route path="/pj1" element={<pj1 />} />
            <Route path="/Tearms" element={<Tearms />} />
          </Routes> */}
        </div>
        <div className="footer"></div>
      </div>
    </>
  )
}

export default App
