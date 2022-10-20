import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { addBlog,editBlog,removeBlog } from "./actions/blogAction";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore" ;
import photo1 from "./image/iphone14.jpg"
import photo2 from "./image/243464_7_mvd2ms_png.webp"
import photo3 from "./image/iphone_se_red_1_png.webp"
import photo4 from "./image/New-Project-2021-08-30T161510.300_png.webp"
import photo5 from "./image/New-Project-1-78_png.webp"
import photo6 from "./image/iphone12mini.jpg"
const store  = configureStore();



// Dispatch Start
store.subscribe(()=>{
  console.log(store.getState());
})
const blog1 =  store.dispatch(addBlog({photo:photo1,title:"Iphone 14 pro max",price:"3299.99 AZN",desc:"With Ceramic Shield, tougher than any smartphone glass. Water resistance."}))
const blog2 =  store.dispatch(addBlog({photo:photo2,title:"IPhone 13",price:"2159.99 AZN",desc:"We encourage you to re‑use your current USB to Lightning cables, and headphones."}))
const blog3 =  store.dispatch(addBlog({photo:photo3,title:"Iphone SE",price:"1249.99 AZN",desc:"As part of our efforts to reach carbon neutrality by 2030, iPhone SE does"}))
const blog4 =  store.dispatch(addBlog({photo:photo4,title:"Iphone 11",price:"1339.99 AZN",desc:"Liquid Retina HD display 6.1‑inch all-screen LCD Multi-Touch display with IPS"}))
const blog5 =  store.dispatch(addBlog({photo:photo5,title:"Iphone XS",price:"1499.99  AZN",desc:"Glass front and back Surgical-grade stainless steel to a depth of 2 metres for up to 30 minutes4"}))
const blog6 =  store.dispatch(addBlog({photo:photo6,title:"Iphone 12 mini",price:"1699.99  AZN",desc:"A14 Bionic chip 6-core CPU with 2 performance and 4 efficiency coresn 4-core GPU 16-core Neural Engine"}))

console.log(blog1.blog.id);
// Dispatch End




class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));