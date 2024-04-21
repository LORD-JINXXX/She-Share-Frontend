import React from 'react';
import './footer.css';

const Footer = () => {

    return (
        <>
            <main>
                <div className="footerWrapper">
                    <div className="footerContainer">
                        <div className="footerContainerContent">
                            <div className="containerOne">
                                <div className="title">
                                    <span>She Share</span>
                                </div>
                                <div className="cont">
                                    <span>About Us</span>
                                    <span>Careers</span>
                                    <span>Contact Us</span>
                                    <span>Follow Us</span>
                                </div>
                            </div>
                            <div className="containerTwo">
                                <div className="title">
                                    <span>Support</span>
                                </div>
                                <div className="cont">
                                    <span>FAQ's</span>
                                    <span>Cancellation Policy</span>
                                </div>
                            </div>
                            <div className="containerThree">
                                <div className="title">
                                    <span>Become a Host</span>
                                </div>
                                <div className="cont">
                                    <span>Hosting Resources</span>
                                    <span>Hosting Responsibility</span>
                                    <span>Share a Room</span>
                                    <span>Pets</span>
                                </div>
                            </div>
                            <div className="containerFour">
                            <div className="title">
                                    <span>Terms & Privacy</span>
                                </div>
                                <div className="cont">
                                    <span>Terms & Conditions</span>
                                    <span>Privacy Policy</span>
                                </div>
                            </div>
                        </div>
                        <div className="footerContainerCopyright">
                            <span>© 2024 She Share. All Rights Reserved.</span>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Footer;
