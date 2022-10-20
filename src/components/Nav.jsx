import React from 'react'
import { Link,NavLink } from 'react-router-dom'
// import movies from './data/Data';
// import SingleBlog from './components/MovieCard';

const Nav = () => {
  return (
<header className="p-3 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
       
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><NavLink className="nav-link active nav-link px-2 text-white navtxt" to="/">Home</NavLink></li>
          <li><NavLink className="nav-link px-2 text-white navtxt" to="/blogs">Models</NavLink></li>
          <li><NavLink to="/" className="nav-link px-2 text-white navtxt">Pricing</NavLink></li>
          <li><NavLink to="/" className="nav-link px-2 text-white navtxt">FAQs</NavLink></li>
          <li><NavLink to="/" className="nav-link px-2 text-white navtxt">About</NavLink></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">Sing Up</button>
          <Link className="btn btn-outline-danger" to="/login">Dashboard</Link>
         

 {/* LANG */}

 {/* <div className="container mt-5">
      <div className="mt-5">
        <button onClick={()=>{handlerClick('az')}} className='btn btn-danger'>AZ</button>
        <button onClick={()=>{handlerClick('ru')}} className='btn btn-danger'>RU</button>
        <button onClick={()=>{handlerClick('en')}} className='btn btn-danger'>EN</button>
      </div>
      <p></p>
  <div className="row">
  {movies.map((fd,i)=>(
        <SingleBlog title={t(`movie.${i+1}`)} price={fd.price} photo={fd.photo}/>
      ))}
  </div> */}
      {/* <ModeTop color={mode}/>
      <ModeBtn color={mode} setColor={setMode}/> */}
    </div>
        </div>
      </div>
  </header>



  )
}

export default Nav