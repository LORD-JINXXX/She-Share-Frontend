import React from 'react';
import './sectionOne.css';

const SectionOne = () => {

    return (
        <>
            <main>
                <div className="container">
                    <div className="backGround">
                        <img src="./images/woman9.jpg" alt="background" />
                    </div>
                    <div className="contentContainer">
                    <div className='sectionOne'>
                        <div className="oneContainer">
                            <div className="image">
                                <img src="./images/woman2.jpg" alt="woman room share" />
                            </div>
                            <div className="title"><h2>Share Your Room</h2></div>
                        </div>
                    </div>
                    <div className='sectionTwo'>
                        <div className="twoContainer">
                            <div className="image">
                                <img src="./images/woman3.jpg" alt="rent a room" />
                            </div>
                            <div className="title"><h2>Rent A Room</h2></div>
                        </div>
                    </div>
                    <div className='sectionThree'>
                        <div className="threeContainer">
                            <div className="content">
                                <div className="image">
                                    <img src="./images/woman4.jpg" alt="woman welcome you" />
                                </div>
                                <div className="title">Welcome</div>
                            </div>
                        </div>

                        <div className="threeContainer">
                            <div className="content">
                                <div className="image">
                                    <img src="./images/woman5.jpg" alt="woman welcome you" />
                                </div>
                                <div className="title">Safety</div>
                            </div>
                        </div>

                        <div className="threeContainer">
                            <div className="content">
                                <div className="image">
                                    <img src="./images/woman6.jpg" alt="woman welcome you" />
                                </div>
                                <div className="title">Adventure</div>
                            </div>
                        </div>

                        <div className="threeContainer">
                            <div className="content">
                                <div className="image">
                                    <img src="./images/woman7.avif" alt="woman welcome you" />
                                </div>
                                <div className="title">Community</div>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                </div>

            </main>
        </>
    )
}

export default SectionOne;
