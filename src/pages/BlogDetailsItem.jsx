import React from 'react'

const BlogDetailsItem = ({id,title,desc}) => {
  return (
    <div>
        <p>Blog ID:{id}</p>
        <p>title:{title}</p>
        <p>descriptoin :{desc}</p>
    </div>
  )
}

export default BlogDetailsItem