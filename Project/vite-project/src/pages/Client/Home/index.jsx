import React from 'react'
import Style from "./index.module.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdOutlineSlowMotionVideo } from "react-icons/md"
import { FaSearch } from "react-icons/fa";
import Cuts from "../../../conponent/Cuts"
const index = () => {
  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
      </style>
      <section className={Style.intro}>
        <Container>
          <Row>
            <Col lg={7} md={12} sm={12} className={Style.info}>
              <h5>WELCOME TO BARBERO</h5>
              <h1>WE WILL MAKE YOUR
                STYLE OF YOUR DREAMS</h1>
              <Col lg={8} className={Style.introParag}>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                <br />
                <button><b>LEARN MORE ABOUT US</b></button>
              </Col>

            </Col>
          </Row>
        </Container>
      </section>
      <section className={Style.cuts}>
          <Cuts/>
      </section>

      <section className={Style.about}>
        <Container>
          <Row>
            <Col className={Style.aboutImg} lg={6} md={12} sm={12}>

            </Col>
            <Col className={Style.aboutInfo} lg={5} md={12} sm={12}>
              <h5>ABOUT BARBER</h5>
              <h1>A SMOOTH BARBER EXPERIENCE IN YOUR TOWN</h1> <br />
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p> <br />
              <button>year sdkbdshkdsh dfjbdf</button>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={Style.video}>
        <Row>
          <Col lg={4} md={7} sm={7} className={Style.videoTitle}>
            <span><MdOutlineSlowMotionVideo /> </span> <br />
            <h1>WATCH OUR VIDEO
              POPULAR HAIR STYLE</h1>
          </Col>

        </Row>

      </section>

      <section className={Style.gallery}>
        <Row>
          <Col lg={6} md={12} sm={12} className={Style.galleryTitle}>
            <h5>GALLERY</h5>
            <h1>PHOTOS OF OUR EVENTS</h1>
          </Col>


        </Row>
        <div className={Style.container}>
          <Row>
            <Col className={Style.img1 } sm={12} lg={3} md={6}>
            <div className={Style.border}><span className={Style.galleryIcon}><FaSearch /></span></div>  
            </Col>
            <Col className={Style.img2} sm={12} lg={3} md={6} >
            <div className={Style.border}><span className={Style.galleryIcon}><FaSearch /></span></div>  
            </Col>
            <Col className={Style.img3} sm={12} lg={3} md={6} >
            <div className={Style.border}><span className={Style.galleryIcon}><FaSearch /></span></div>  
            </Col>
            <Col className={Style.img4} sm={12} lg={3} md={6} >
            <div className={Style.border}><span className={Style.galleryIcon}><FaSearch /></span></div>  
            </Col>
            <Col className={Style.img5} sm={12} lg={3} md={6} >
            <div className={Style.border}><span className={Style.galleryIcon}><FaSearch /></span></div>  
            </Col>
            <Col className={Style.img6} sm={12} lg={3} md={6} >
            <div className={Style.border}><span className={Style.galleryIcon}><FaSearch /></span></div>  
            </Col>
            <Col className={Style.img7} sm={12} lg={3} md={6} >
            <div className={Style.border}><span className={Style.galleryIcon}><FaSearch /></span></div>  
            </Col>
            <Col className={Style.img8} sm={12} lg={3} md={6} >
            <div className={Style.border}><span className={Style.galleryIcon}><FaSearch /></span></div>  
            </Col>
          </Row>
        </div>
      </section>
      <section className={Style.appointment}>
        <Container>
          <h2>MAKE AN APPOINTMENT</h2>
          <form className={Style.input}>
            <input type="text" placeholder='First Name' /> 
            <input type="text" placeholder='Last Name' />
            <input type="phone" placeholder='Phone' />
            <input type="text" placeholder='Select Your Services' />
            <button>MAKE AN APPIONTMENT</button>
          </form>
        </Container>
      </section>
    </>
  )
}

export default index