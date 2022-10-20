import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DashboardItem from './DashboardItem';

const Dashboard = (props) => {
  return (
<div className="mt-5 container">
    <Link className='btn btn-primary' to="/add">Add</Link>
<table className="table ">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">ID</th>
        {/* <th scope="col">Photo</th> */}
        <th scope="col">Title</th>
        <th scope="col">Description</th>
        <th scope="col">Edit</th>
      </tr>
    </thead>
    <tbody>
    {props.blogvalues.map((fd, i) => {
          return <DashboardItem key={i} count={i} {...fd} />;
        })}
      
    </tbody>
  </table>
</div>
  )
}
const mapStateToProps = (state) => {
    return {
      blogvalues: state.actionreducer,
    };
  };
export default connect(mapStateToProps)(Dashboard)



