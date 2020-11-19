import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Achievements from '../Achievements/Achievements';
import Experience from '../Experience/Experience';
import Header from '../Header/Header';
import Input from '../Input/Input';
import Project from '../Project/Project';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div style={{ backgroundColor: '#FAFFFD' }}>
            <Header></Header>
            <Experience></Experience>
            <Project></Project>
            <Achievements></Achievements>
            <div className="container">
                <Team></Team>
            </div>
            <Input></Input>
            <Footer></Footer>
        </div>
    );
};

export default Home;