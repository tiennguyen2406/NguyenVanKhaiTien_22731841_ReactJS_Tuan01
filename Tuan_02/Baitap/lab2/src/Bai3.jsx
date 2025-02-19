import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
    const [color, setColor] = useState('blue');

    return (
        <div>
            <input 
                type="color" 
                value={color} 
                onChange={(e) => setColor(e.target.value)} 
            />
            <div style={{ color: color }}>
                Hello, this is a text with {color} color!
            </div>
        </div>
    );
}

export default App;