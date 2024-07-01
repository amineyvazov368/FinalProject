import React, { useEffect, useState } from 'react'
import AdminPanelTable from '../../../conponent/Admin/common/AdminPanelTable';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDeleteMessageMutation, useGetMessageQuery } from '../../../services/MessageQuerySlice';
const index = () => {
    const [messages, setMessages]=useState([])

    useEffect(()=>{
      
        axios.get("http://localhost:5050/api/message").then(res=>{
          console.log(res)
          setMessages(res.data.message)
         //  setTeams(res.data)
         }).catch(e=>{
           console.log(e)
         })
      },[])
    
      let rows=[]
      const columns1=[
         { id: "id", label: "Id", minWidth: 20,maxWidth:200 },
         { id: "name", label: "Name", minWidth: 20,maxWidth:200 },
         { id: "phone", label: "Phone", minWidth: 20,maxWidth:200 },
         { id: "time", label: "Time", minWidth: 20,maxWidth:200 },
         { id: "barber", label: "Barber", minWidth: 20,maxWidth:200 },
    
       ]
    
       console.log(messages)
       messages.map((x,i)=>{
         rows.push({id:i,name:x.name,phone:x.phone,time:x.time,barber:x.barber})
       })
    
       const { data: message, error, isLoading, refetch, } = useGetMessageQuery();
       const [deleteOne, { isError, isSuccess }] = useDeleteMessageMutation();
    
    



  return (
 <> <br />
 <h1>Appointment</h1>
 <br />
    <ul className='list'>
        <AdminPanelTable Rows={rows} Columns={columns1} />
    </ul>
 


  <br/>
 
 </>
  )
}

export default index