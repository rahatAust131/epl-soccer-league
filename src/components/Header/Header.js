import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="banner">
            <div className="banner-text">
                <h1>EPL Championship</h1>
                <p>English Premiere League</p>
            </div>
            <img src="https://img.fifa.com/image/upload/t_l1/stxonnyuypsgy4kv9rqu.jpg" alt="banner"/>
        </div>
    );
};

export default Header;