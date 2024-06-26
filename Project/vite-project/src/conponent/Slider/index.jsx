import React from 'react'
import Style from "./index.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetTeamsQuery, useDeleteTeamsMutation} from "../../services/TeamsQuerySlice"
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { FaTwitter } from "react-icons/fa"; 
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const index = () => {

    const { data: teams, error, isLoading, refetch, } = useGetTeamsQuery()
    const [deleteOne, { isError, isSuccess }] = useDeleteTeamsMutation();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
  return (
   <>
   <Slider {...settings}>
   {teams && teams.teams.map((team)=>{
            return(
              
                <Col lg= {12}>
                        <Row>
                            <Col lg={3} className={Style.img}>
                            <img src={team.src} alt="" />
                            </Col>
                            <Col lg={5}>
                                <h2>{team.title}</h2>
                                <p>{team.description}</p>
                                <div className={Style.icons}>
                                        <button><span><FaTwitter /></span></button>
                                        <button><span><FaFacebook /></span></button>
                                        <button><span><FaInstagram /></span></button>
                                    </div>
                                    <button><b>MAKE SCHEDULE</b></button>
                            </Col>
                            <Col lg={3}>
                                <h3>LIST OF SERVICES</h3>
                                <ul>
                                    <li>Hair Cut</li>
                                    <li>Beart Trim</li>
                                    <li> Hair Shampoo</li>
                                    <li>Clipper Cut</li>
                                    <li>Hair Style</li>
                                    <li>face Shave</li>
                                    <li>Moustache Trim</li>
                                </ul>
                            </Col>
                        </Row>
                        </Col>
               
            )
        })}
     

     </Slider>
      
        
     
   </>
  )
}

export default index