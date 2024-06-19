import React from 'react'
import Style from "./index.module.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";
import { FaMap } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";



const index = () => {
    return (
        <>
        <style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
</style>
            <section className={Style.footer}>
               <div className={Style.start}> <Container>
                    <Row className={Style.first}>
                        <Col className={Style.one}>
                            <h4>BARBERO</h4> <br />
                            <p>Far far away, behind the word mountains, far from the countries.</p>
                            <div className={Style.icons}>
                                <button><span><FaTwitter /></span></button>
                                <button><span><FaFacebook /></span></button>
                                <button><span><FaInstagram /></span></button>
                            </div>
                        </Col>
                        <Col className={Style.two}>

                            <h4>EXPLORE</h4><br />
                            <ul>
                                <li><GoChevronRight />About</li>
                                <li><GoChevronRight />Services</li>
                                <li><GoChevronRight />Gallery</li>
                                <li><GoChevronRight />Blog</li>
                            </ul>
                        </Col>
                        <Col className={Style.three}>
                            <h4>INFO</h4> <br />
                            <ul>
                                <li><GoChevronRight />Join us</li>
                                <li><GoChevronRight />Make Appointment</li>
                                <li><GoChevronRight />Privacy & Policy</li>
                                <li><GoChevronRight />Term & Conditions</li>
                            </ul>
                        </Col>
                        <Col className={Style.four}>
                            <h4>HAVE A QUESTIONS?</h4> <br />
                            <ul>
                                <li><FaMap />	203 Fake St. Mountain View, San Francisco, California, USA</li>
                                <li><FaPhoneAlt /> +2 392 3929 210</li>
                                <li><FaTelegramPlane />	info@yourdomain.com</li>
                            </ul>
                        </Col>
                    </Row>
                   
                </Container></div>
                <div className={Style.finish}>
                <Container >
                <Row className={Style.end}>
                        <Col>
                        <p>Copyright ©2024 All rights reserved | This template is made with <span className={Style.heart}><FaHeart /></span>  by Colorlib</p>
                        </Col>
                    </Row>

                </Container>
                </div>

            </section>
        </>
    )
}

export default index