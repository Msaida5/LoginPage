import React from 'react'
import { Link } from 'react-router-dom'
// import photo from "index.jsx"

const DashboardItem = ({id,photo,title,desc,count}) => {
  return (
    <tr>
    <th scope="row">{count+1}</th>
    <td>{id}</td>
    {/* <td>{photo}</td> */}
    <td>{title}</td>
    <td>{desc}</td>
    <td><Link className='btn btn-warning' to={`edit/${id}`}>Edit</Link></td>
  </tr>
  )
}

export default DashboardItem