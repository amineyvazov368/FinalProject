import React from 'react'
import Row from 'react-bootstrap/Row';
import { useSelector, useDispatch } from 'react-redux'
import Col from 'react-bootstrap/Col';
import Style from './index.module.css'
import { Container } from '@mui/material';
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetSaysQuery, useDeleteSaysMutation} from "../../services/SaysQuerySlice"
const index = () => {
    const { data: says, error, isLoading, refetch, } = useGetSaysQuery()
    const [deleteOne, { isError, isSuccess }] = useDeleteSaysMutation();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
  return (
    <>
    <Slider {...settings} className={Style.about}>
    { says && says.says.map((say)=>{
        return(
            <Col className={Style.col} lg={4} md={6} sm={12}>
               
               <div className={Style.aboutInfo}>{say.about}</div> 
               <div className={Style.aboutTitle}>
                <div className={Style.img}>
                    <img src={say.src} alt="" />
                </div>
                <div className={Style.one}>
                <span className={Style.star}><FaStar /> <FaStar /><FaStar /><FaStar /><FaStar /></span>
                <h3>{say.name}</h3>
                <h6>CUSTOMER</h6>
                </div>
               </div>
            
            
            </Col>
        )
    })}

    </Slider>
    
    </>
  )
}

export default index