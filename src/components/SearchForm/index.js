import React, { Component } from "react";
import API from "/Users/davidroman/Desktop/directory/src/utils/API.js";
import "./style.css";



class SearchForm extends Component {
  state = {
    female: [],
    male: [],
    result: [],
    error: ""
  }

  componentDidMount() {
    this.loadFemaleEmp()
    this.loadMaleEmp()
  }

  loadFemaleEmp = () => {
    API.getFemaleEmp()
      .then(res => {
        this.setState({ female: res.data.results })
        console.log(this.state.female)
      })
      .catch(err => console.log(err))
  }

  loadMaleEmp = () => {
    API.getMaleEmp()
      .then(res => {
        this.setState({ male: res.data.results })
        console.log(this.state.male)
      })
      .catch(err => console.log(err))
  }

  renderGender = event => {
    event.preventDefault();
    const id = event.target.id
    if (id === "male") {
      const maleInput = this.state.male
      console.log(maleInput)
      return this.setState({ result: maleInput })
    } else if (id === "female") {
      const femaleInput = this.state.female;
      return this.setState({ result: femaleInput })
    } else {
      return
    }
  }

  render() {
    return (
      <>
        <form>
          <div className="form-group">
            <br />
            <button onClick={this.renderGender} id="male" className="btn btn-dark male">
              Male
        </button>
            <button onClick={this.renderGender} id="female" className="btn btn-dark female">
              Female
        </button>
          </div>
        </form>
        <table className="styleTable">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
          {this.state.result.map(info => {
            return <tr>
              <th>{info.name.first}</th>
              <th>{info.name.last}</th>
              <th>{info.dob.age}</th>
              <th>{info.phone}</th>
              <th>{info.email}</th>
            </tr>
          })}
        </table>
      </>
    );
  }
}

export default SearchForm;