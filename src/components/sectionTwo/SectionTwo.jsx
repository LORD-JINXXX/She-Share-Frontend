import React from 'react';
import './sectionTwo.css';

const SectionTwo = () => {

    return (
        <>
            <main>

                <div className="sectionTwoContainer">
                    <div className="backGroundTwo">
                        <img src="./images/back6.png" alt="background" />
                    </div>
                    <div className="contentContainerTwo">
                        <div className='sectionOne'>
                            <div className="one">
                                <span>What's your check-in and check-out date?</span>
                            </div>
                            <div className="two">
                                <label htmlFor="check-in">Check-in Date </label>
                                <input type="date" name="check-in" id="checkIn" />
                            </div>
                            <div className="three">
                                <label htmlFor="check-out">Check-out Date </label>
                                <input type="date" name="check-out" id="checkOut" />
                            </div>
                        </div>
                        <div className='sectionTwo'>
                            <div className="one">
                                <span>Search Your Destination</span>
                            </div>
                            <div className="two">
                                <input type="search" name="search" id="search" placeholder='Search your destination' />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                            </div>
                        </div>
                        <div className='sectionThree'>
                            <div className="threeContainer">
                                <span>Who</span>
                                <span>Create</span>
                                <span>A</span>
                                <span>Profile</span>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </>
    )
}

export default SectionTwo;
