import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from '../components/Nav';
import Footer from "../components/Footer";
import Home from '../pages/Home';
import Blogs from '../pages/Blogs';
import NotFoundPage from '../pages/NotFoundPage';
import Dashboard from '../pages/dashboard/Dashboard';
import AddBlogPage from '../pages/blogforms/AddBlogPage';
import EditBlog from '../pages/blogforms/EditBlog';
import Login from '../pages/authentication/Login'
import BlogDetails from '../pages/BlogDetails';
const AppRouter = () => {
  return (
    <BrowserRouter>
    <Nav/>
    
    <div className="container">
  
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/blogs" component={Blogs}></Route>
        <Route  path="/blogs/:id" component={BlogDetails}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/add" component={AddBlogPage}></Route>
        <Route path="/edit/:id" component={EditBlog}></Route>
        <Route path="/login" component={Login}></Route>
        <Route  component={NotFoundPage}></Route>

    </Switch>
    </div>
    <Footer/>
    </BrowserRouter>
  )
}

export default AppRouter