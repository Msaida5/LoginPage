import React from 'react'
import { connect } from 'react-redux'
import { editBlog } from '../../actions/blogAction';
import BlogForm from './BlogForm';

const EditBlog = props => {
  return (
    <div>
        <BlogForm editblog={props.blogvalues}
        onFormSubmit={(a)=>{
            props.dispatch(editBlog(props.blogvalues.id,a));
            props.history.push('/dashboard');
        }}/>
        {/* <button className='btn btn-danger ' 
          onClick={()=>{
          props.dispatch(removeBlog({id:props.blogvalues.id}))
          props.history.push('/dashboard')
        }}>Delete</button> */}
    </div>
  )
}

const mapStateToProps = (state,props) => {
    return {
      blogvalues: state.actionreducer.find((b)=>{
        return b.id === props.match.params.id
      })
    };
  };
export default connect(mapStateToProps)(EditBlog)