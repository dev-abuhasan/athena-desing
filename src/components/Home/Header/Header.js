import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css';

const Header = () => {
    return (
        <>
            <div className="background-img container">
                <Navbar></Navbar>
            </div>
            <HeaderMain></HeaderMain>
        </>
    );
};

export default Header;