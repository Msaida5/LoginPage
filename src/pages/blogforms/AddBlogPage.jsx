import React from 'react'
import { connect } from 'react-redux'
import BlogForm from './BlogForm'
import {addBlog} from '../../actions/blogAction'
const AddBlogPage = props => {
  return (
    <div>
      <h1 className='text-center clr'>Add Blog</h1>
      <BlogForm onFormSubmit={(formdata)=>{
        props.dispatch(addBlog(formdata));
        props.history.push('/dashboard')
      }}/>
    </div>
  )
}

export default connect()(AddBlogPage)