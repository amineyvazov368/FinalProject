import React from 'react'
import Row from 'react-bootstrap/Row';
import { useSelector, useDispatch } from 'react-redux'
import Col from 'react-bootstrap/Col';
import Style from './index.module.css'
import { useGetCutsQuery, useDeleteCutsMutation} from "../../services/CutsQuerySlice"
const index = () => {
  const { data: cuts, error, isLoading, refetch, } = useGetCutsQuery()
    const [deleteOne, { isError, isSuccess }] = useDeleteCutsMutation();
  return (
    <>
    <Row className={Style.cards}>
    {cuts && cuts.cuts.map((cut)=>{

      return(
        <Col lg={3}>
         <div className={Style.card}>
          <div className={Style.cardImg}>
            <img src={cut.src} alt="" />
          </div>
          <div className={Style.cardInfo}>
            <h2>{cut.title} </h2> <br />
            <p>{cut.description}</p>
          </div>
         </div>
        </Col>
      )
    })}

    </Row>
    
    
    </>
  )
}

export default index