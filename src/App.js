import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtName: '',
      txtPassword: '',
      textDesc: '',
      sltGender: 1,
      language:'vi',
      status:true
    }
    this.onHandleChange = this.onHandleChange.bind(this)
  }
  onHandleChange(e) {
    var target = event.target;
    var name = target.name;
    var value = target.type==="checkbox"?target.checked:target.value;
    this.setState({
      [name]: value
    })
  }
  onHandleSubmit(e) {
    e.preventDefault();
    console.log(this.state)
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="card">
              <div className="card-header">
                <h3>Form</h3>
              </div>
              <div className="card-body">
                <form onSubmit={this.onHandleSubmit.bind(this)}>
                  <div className="form-group">
                    <label>UserName: </label>
                    <input
                      value={this.state.txtName}
                      type="text"
                      className="form-control"
                      name="txtName"
                      onChange={this.onHandleChange} />
                  </div>
                  <div className="form-group">
                    <label>Password: </label>
                    <input
                      value={this.state.txtPassword}
                      type="password"
                      className="form-control"
                      name="txtPassword"
                      onChange={this.onHandleChange} />
                  </div>
                  <div className="form-group">
                    <label>Mô tả: </label>
                    <textarea
                      value={this.state.textDesc}
                      className="form-control"
                      rows="3"
                      name="textDesc"
                      onChange={this.onHandleChange}></textarea>
                  </div>
                  <div className="form-group">
                    <label>Giới tính</label>
                    <select
                      className="form-control"
                      name="sltGender"
                      value={this.state.sltGender}
                      onChange={this.onHandleChange}>
                      <option value={0}>Nữ</option>
                      <option value={1}>Nam</option>
                    </select>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input 
                      type="radio" 
                      className="form-check-input" 
                      name="language" 
                      value="en"
                      onChange={this.onHandleChange}
                      checked={this.state.language==="en"}
                       />
                      Tiếng Anh
                    </label><br />
                    <label className="form-check-label">
                      <input 
                      onChange={this.onHandleChange}
                      type="radio" 
                      className="form-check-input" 
                      name="language" 
                      value="vi"
                      checked={this.state.language==="vi"}
                      />
                      Tiếng Việt
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input 
                      type="checkbox" 
                      className="form-check-input" 
                      name="status"
                      checked={this.state.status===true}
                      onChange={this.onHandleChange}
                      />
                      Trạng thái
                    </label>
                  </div>
                  <br />
                  <button type="submit" className="btn btn-primary">Lưu lại</button>&nbsp;
                  <button type="reset" className="btn btn-warning">Xóa Trắng</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
