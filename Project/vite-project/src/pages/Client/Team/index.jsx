import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Style from "./index.module.css"
import Slider from "../../../conponent/Slider"
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
            <h4>Home <b><GoChevronRight /></b> Team <b><GoChevronRight /></b> </h4>
            <h1>Team</h1>
            </Col>
             
          </Row>
        </Container>
      </section>
      <section className={Style.team}>
        <Container>
          <Row>
            <Col className={Style.teamTitle} lg={5}>
            <h5>TEAM</h5>
            <h1>OUR EXPERT TEAM</h1>
            </Col>
          </Row>
          <Row>
            
              <Slider/>
          </Row>
        </Container>
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