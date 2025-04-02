import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './components/Header';
function App() {

  return (
    <>
     <div className="container">
      <div className="header">
        {/* <Header></Header> */}
      </div>
      <div className="menu"></div>
      <div className="content"></div>
      <div className="footer"></div>
     </div>
    </>
  )
}

export default App
