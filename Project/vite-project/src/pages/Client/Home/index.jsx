import React from 'react'
import Style from "./index.module.css"
import Container from 'react-bootstrap/Container';
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { useFormik } from "formik";
import Row from 'react-bootstrap/Row';
import * as Yup from 'yup';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import { MdOutlineSlowMotionVideo } from "react-icons/md"
import { FaSearch } from "react-icons/fa";
import Cuts from "../../../conponent/Cuts"
import MenuItem from "@mui/material/MenuItem";
import Prices from "../../../conponent/Prices"
import Slider from "../../../conponent/Slider"
import FormControl from "@mui/material/FormControl";

import Says from "../../../conponent/Says"
import Blogs from "../../../conponent/Blogs"
const index = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      time: '',
      barber: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
        phone: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
        time: Yup.string().required('Required'),
        barber: Yup.string().required('Required'),
    }),
    onSubmit: values => {
     
      console.log("salam");
        try {

          const response = axios.post("http://localhost:5050/api/message", values);
          history(-1)
        }
        catch (e) {
          console.log(e.message)
        }
    },
  });
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
      <section className={Style.price}>
        <Container>
          <Row>
            <Col className={Style.priceTitle} lg={5}>
            <h5>PRICING</h5>
            <h1>PRICE & PLANS</h1>
            </Col>
          </Row>
          <Prices></Prices>
        </Container>
      </section>
      <section className={Style.said}>
        <Container>
        <Row>
            <Col className={Style.saidTitle} lg={5}>
            <h5>TESTIMONIAL</h5>
            <h1>PEOPLE SAY <br />ABOUT OUR BARBER</h1>
            </Col>
          </Row>

          <Says/>
        </Container>
      </section>
      <section className={Style.appointment}>
        <Container>
          <h2>MAKE AN APPOINTMENT</h2>
          <form className={Style.add} onSubmit={formik.handleSubmit}>
                <input className={Style.singup}
                  id="name"
                  name="name"
                  type="text"
                  placeholder='Name'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div>{formik.errors.name}</div>
                ) : null}
                


                <input className={Style.singup}
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder='Phone'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div>{formik.errors.phone}</div>
                ) : null}
              

                <input className={Style.singup}
                  id="time"
                  name="time"
                  type="datetime-local"
                  placeholder='time'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.time}
                />
                {formik.touched.time && formik.errors.time ? (
                  <div>{formik.errors.time}</div>
                ) : null}
               
              
                 <FormControl className={Style.select} fullWidth>
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          <Select
            value={formik.values.barber}
            onChange={formik.handleChange}
            name="barber"
            onBlur={formik.handleBlur}
            labelId="demo-simple-select-label"
            id="barber"
            label="barber"
          >
            <MenuItem value={"Rodrigo Rock"}>Rodrigo Rock</MenuItem>
            <MenuItem value={"James Edison"}>James Edison</MenuItem>
            <MenuItem value={"Json Hosted"}>Json Hosted</MenuItem>
            <MenuItem value={"Ceyhun"}>Ceyhun</MenuItem>
          </Select>
        </FormControl>
        {formik.touched.barber && formik.errors.barber && (
          <span style={{ color: "red" }}>{formik.errors.barber}</span>
        )}
                <button className={Style.buttonnn} type="submit"><b>Add</b></button>
                refetch()
              </form>
             
        </Container>
      </section>
      <section className={Style.post}>
        <Container>
        <Row>
            <Col className={Style.postTitle} lg={5}>
            <h5>OUR BLOG</h5>
            <h1>RECENT POST</h1>
            </Col>
          </Row>
        <Blogs/>
         
        </Container>
      </section>

    </>
  )
}

export default index