import React from 'react'
import Row from 'react-bootstrap/Row';
import { useSelector, useDispatch } from 'react-redux'
import Col from 'react-bootstrap/Col';
import Style from './index.module.css'
import { Container } from '@mui/material';
import { useGetPricesQuery, useDeletePricesMutation} from '../../services/PricesQuerySlice'
const index = () => {
   const { data: prices, error, isLoading, refetch, } = useGetPricesQuery()
    const [deleteOne, { isError, isSuccess }] = useDeletePricesMutation();
  return ( 
    <>
    <Container>
        <Row className={Style.boxs}>
            {prices && prices.prices.map((price)=>{
                return(
                    <Col lg={4} md={6} sm={12}>
                        <div className={Style.box}>
                            <div className={Style.boxImg}>
                                <img src={price.src} alt="" />
                            </div>
                            <div className={Style.boxInfo}>
                                <ul>
                                    <li>{price.services}</li>
                                </ul>
                               
                            </div>
                            <div className={Style.number}>
                                 <h4>{price.price}$</h4>
                             <button><b>GET STARTED</b></button>
                             </div>
                        </div>

                    </Col>
                )
            })}
        </Row>
    </Container>
    
    
    </>
  )
}

export default index