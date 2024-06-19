import React from 'react'
import Style from "./index.module.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const index = () => {
  return (
    <>
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

      <section className={Style.about}>
        <Container>
          <Row>
            <Col lg={6} md={12} sm={12}>
              
            </Col>
            <Col>lg={6} md={12} sm={12}</Col>
          </Row>
        </Container>
      </section>


    </>
  )
}

export default index