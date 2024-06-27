import React from 'react'
import Style from "./index.module.css"
import { Table } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useGetTeamsQuery, useDeleteTeamsMutation} from "../../../services/TeamsQuerySlice"
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


const index = () => {
  const formik = useFormik({
    initialValues: {
      src: '',
      title: '',
      description: '',
    },
    validationSchema: Yup.object({
      src: Yup.string()
        .required('Required'),
        title: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
        description: Yup.string().required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const { data: teams, error, isLoading, refetch, } = useGetTeamsQuery();
  const [deleteOne, { isError, isSuccess }] = useDeleteTeamsMutation();
  return (
    <>
    <h1>Teams</h1> <br />
   <Table
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
  /> <br />
  <h1>Add Teams</h1>

     <form onSubmit={formik.handleSubmit}>
       <input
         id="src"
         name="src"
         type="url"
         placeholder='Src'
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.src}
       />
       {formik.touched.src && formik.errors.src ? (
         <div>{formik.errors.src}</div>
       ) : null}
 <br /> <br />
       <input
         id="title"
         name="title"
         type="text"
         placeholder='Title'
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.title}
       />
       {formik.touched.title && formik.errors.title ? (
         <div>{formik.errors.title}</div>
       ) : null}
 <br /> <br />
       <input
         id="description"
         name="description"
         type="text"
         placeholder='Description'
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.description}
       />
       {formik.touched.description && formik.errors.description ? (
         <div>{formik.errors.description}</div>
       ) : null}
  <br />
  <br />
       <button className={Style.button} type="submit"><b>Submit</b></button>
     </form>

    </>
  )
}

export default index