import React from 'react';
import './sectionThree.css';

const SectionThree = () => {

    return (
        <>
            <main>
                <div className='sectionThreeContainer'>
                    <div className="backGroundThree">
                        <img src="./images/city2.jpg" alt="city" />
                    </div>
                    <div className="contentContainer">
                        <div className="leftContainer">
                            <span>Cities Where You Find</span>
                            <span>Out Top She Share</span>
                            <span>Services</span>
                        </div>
                        <div className="rightContainer">
                            <div className="cityContainer">
                                <span>Austin, Tx</span>
                            </div>

                            <div className="cityContainer">
                                <span>New York City, NY</span>
                            </div>

                            <div className="cityContainer">
                                <span>Tokyo, Japan</span>
                            </div>

                            <div className="cityContainer">
                                <span>Delhi, India</span>
                            </div>

                            <div className="cityContainer">
                                <span>Bangkok, Thailand</span>
                            </div>

                            <div className="cityContainer">
                                <span>Cairo, Egypt</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default SectionThree;
