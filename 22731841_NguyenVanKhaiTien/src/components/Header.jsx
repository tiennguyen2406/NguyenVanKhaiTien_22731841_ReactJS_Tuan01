import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <ul>
                <li><a href="/">Trang chủ</a></li>
                <li><a href="/menu">Thực đơn</a></li>
                <li><a href="/contact">Liên hệ</a></li>
            </ul>
            <button>Book Table</button>
        </header>
    );
}

export default Header;
