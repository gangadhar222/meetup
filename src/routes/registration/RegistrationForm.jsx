import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./registration.css";

export class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: "",
      profession: "",
      location: "",
      guests: "",
      date: null,
      address: "",
    };
  }

  handleChange = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  setDate = (date) => {
    this.setState({
      date: date,
    });
  };

  handleSubmit = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={() => this.handleSubmit()} className="form">
          <div className="col1">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Name</label>
              <input
                type="Number"
                name="age"
                className="form-control"
                placeholder="Age"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Date Of Birth</label>
              <br></br>
              <DatePicker
                selected={this.state.date}
                dateFormat="dd/MM/yyyy"
                onChange={(date) => this.setDate(date)}
                maxDate={new Date()}
                className="form-control"
                placeholderText="date"
                isClearable
                showYearDropdown
                scrollableMonthYearDropdown
                required
              />
            </div>
            <div className="form-group">
              <label>Profession</label>
              <select
                className="form-control select"
                name="profession"
                onChange={this.handleChange}
                required
              >
                <option>Student</option>
                <option>Employed</option>
              </select>
            </div>
            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                className="form-control"
                placeholder="Location"
                name="location"
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="col2">
            <div className="form-group">
              <label>Example select</label>
              <select
                className="form-control select"
                name="guests"
                onChange={this.handleChange}
                required
              >
                <option>0</option>
                <option>1</option>
                <option>2</option>
              </select>
            </div>
            <div className="form-group">
              <label>Example textarea</label>
              <textarea
                className="form-control textArea"
                rows="3"
                name="address"
                onChange={this.handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn">
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
