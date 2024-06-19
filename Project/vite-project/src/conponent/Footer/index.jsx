import React from 'react'
import Style from "./index.module.css"
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";

const index = () => {
    return (
        <>
            <section className={Style.footer}>
                <div className={Style.first}>
                    <div className={Style.one}>
                        <h3>BARBERO</h3>
                        <p>Far far away, behind the word mountains, far from the countries.</p>
                        <div>
                            <button><FaTwitter /></button>
                            <button><FaFacebook /></button>
                            <button><FaInstagram /></button>
                        </div>
                    </div>
                    <div className={Style.two}>
                        <h3>EXPLORE</h3>
                        <ul>
                            <li><GoChevronRight />About</li>
                            <li><GoChevronRight />Services</li>
                            <li><GoChevronRight />Gallery</li>
                            <li><GoChevronRight />Blog</li>
                        </ul>
                    </div>
                    <div className={Style.three}>
                        <h3>INFO</h3>
                        <ul>
                            <li><GoChevronRight />Join us</li>
                            <li><GoChevronRight />Make Appointment</li>
                            <li><GoChevronRight />Privacy & Policy</li>
                            <li><GoChevronRight />Term & Conditions</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default index