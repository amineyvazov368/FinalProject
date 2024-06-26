import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Style from "./index.module.css"
import { FaSearch } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";

const index = () => {
  return (
   <>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
      </style>
      <section className={Style.intro}>
        <Container>
          <Row>
            <Col lg={3}>
            <h4>Home <b><GoChevronRight /></b> Gallery <b><GoChevronRight /></b> </h4>
            <h1>Gallery</h1>
            </Col>
             
          </Row>
        </Container>
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