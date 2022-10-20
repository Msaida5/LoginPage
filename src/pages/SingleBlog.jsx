import React from 'react'


const SingleBlog = ({photo,title,price,desc}) => {
  return (
    <div class="card col-12 col-sm-6 col-md-4" >
  <div class="card-body blogsclass row">
  <img class="card-img-top" src={photo} alt="/"/>
    <h5 class="card-title">{title}</h5>
    <h3 class="text-danger">{price}</h3>
    <p class="card-text">{desc}</p>
    {/* <button class="button-71" role="button">ADD ME</button> */}
    {/* <a href="#" class="btn btn-primary">Details</a> */}
  </div>
</div>
  )
}

export default SingleBlog



// import React from 'react'

// const MovieCard = ({photo,title,price}) => {
//   return (
//     <div className="card col-3" >
//   <div className="card-body">
//     <img className="card-img-top" src={photo}></img>
//     <h5 className="card-title">{title}</h5>
//     <p className="card-text">{price}</p>
//     <button class="button-32" role="button">ADD</button>

//   </div>
// </div>
//   )
// }

// export default MovieCard