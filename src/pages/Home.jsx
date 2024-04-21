import React from 'react';
import '../styles/home.css'
import SectionOne from '../components/setctionOne/SectionOne';
import SectionTwo from '../components/sectionTwo/SectionTwo';
import Line from '../components/line/Line';
import SectionThree from '../components/sectionThree/SectionThree';
import Footer from '../components/footer/Footer';

const Home = () => {

    return (
    <>
        <main>
            <SectionOne/>
            <Line/>
            <SectionTwo/>
            <Line/>
            <SectionThree/>
            <Footer/>
        </main>
    </>
)
}

export default Home;
