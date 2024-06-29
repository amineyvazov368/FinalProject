import React, { useEffect, useState } from 'react'
import Style from "./index.module.css"
import { Table } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useGetTeamsQuery, useDeleteTeamsMutation} from "../../../services/TeamsQuerySlice"
import AdminPanelTable from '../../../conponent/Admin/common/AdminPanelTable';
import { Link } from 'react-router-dom';
import axios from 'axios';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
 
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <button>delete</button>
  },
];
const data = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    name: 'Not Expandable',
    age: 29,
    address: 'Jiangsu No. 1 Lake Park',
    description: 'This not expandable',
  },
  {
    key: 4,
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    description: 'My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.',
  },
];





// let [teams,setTeams]=useState(null)


const index = () => {
  
  const [teamss,setTeamss]=useState([])

  useEffect(()=>{
      
    axios.get("http://localhost:5050/api/teams").then(res=>{
      console.log(res)
      setTeamss(res.data.teams)
     //  setTeams(res.data)
     }).catch(e=>{
       console.log(e)
     })
  },[])
  
  let rows=[]
   const columns1=[
      { id: "id", label: "Id", minWidth: 20,maxWidth:200 },
      { id: "title", label: "Title", minWidth: 20,maxWidth:200 },
      { id: "description", label: "description", minWidth: 20,maxWidth:200 },
      { id: "buttons", label: "Actions", minWidth: 20,maxWidth:200 },
    ]
  
  console.log(teamss)
    teamss.map((x,i)=>{
      rows.push({id:i,title:x.title,description:x.description,buttons:{update:`/admin/adminTeam/update/${x._id}`,delete:`/admin/adminTeam/delete/${x._id}`}})
    })
  

  const { data: teams, error, isLoading, refetch, } = useGetTeamsQuery();
  const [deleteOne, { isError, isSuccess }] = useDeleteTeamsMutation();
  return (
    <>
    <h1>Teams</h1> <br />
   {/* <Table
    columns={columns}
    expandable={{
      expandedRowRender: (record) => (
        <p
          style={{
            margin: 0,
          }}
        >
          {record.description}
        </p>
      ),
      rowExpandable: (record) => record.name !== 'Not Expandable',
    }}
    dataSource={data}
  /> <br /> */}
 <div className='Brands adminList'>
    <div className="listInfo">
    <h2>Teams</h2>
    <div className="add">
        <Link className='btn btn-success' to={"create"}>Create</Link>
    </div>
    </div>
    <ul className='list'>
        <AdminPanelTable Rows={rows} Columns={columns1} />
    </ul>
 
</div>

  <br/>


    </>
  )
}

export default index