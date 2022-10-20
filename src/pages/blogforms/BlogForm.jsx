import React, { Component } from "react";

export class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.editblog?props.editblog.title:"",
      desc: props.editblog?props.editblog.desc:"",
      err: "",
    };
  }
  titleChange = (e) => {
    const title = e.target.value;
    this.setState(()=>({title}))
  };
  descChange = (e) => {
    const desc = e.target.value;
    this.setState(()=>({desc}))
  };
  blogOnSubmit = (e) => {
    e.preventDefault();
    if (!this.state.title || !this.state.desc) {
            this.setState({err:"please, fill input"})
    }else{
        this.setState({err:""});
        this.props.onFormSubmit({
            title:this.state.title,
            desc:this.state.desc
        })
    }
  };
  render() {
    return (
      <div className="mt-3 d-flex align-items-center flex-column justify-content-center">
        {this.state.err && (
          <p className="alert alert-warning">{this.state.err}</p>
        )}
        <form className="col-6" onSubmit={this.blogOnSubmit}>
          <div className="mb-3 ">
            <label className="form-label clr">Add Title</label>
            <input
              onChange={this.titleChange}
              type="text"
              className="form-control"
              value={this.state.title}
            />
          </div>
          <div className="mb-3">
            <label className="form-label clr">Add Description</label>
            <input
              onChange={this.descChange}
              type="text"
              className="form-control"
              value={this.state.desc}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default BlogForm;