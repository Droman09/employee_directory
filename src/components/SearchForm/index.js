import React, { Component } from "react";
import API from "/Users/davidroman/Desktop/directory/src/utils/API.js";



class SearchForm extends Component {
  state = {
    female: [],
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



  render() {
    return (
      <>
        <form>
          <div className="form-group">
            <br />
            <button className="btn btn-dark">
              Male
        </button>
            <button className="btn btn-dark">
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
          <tr>
            <th></th>
          </tr>
        </table>
      </>
    );
  }
}

export default SearchForm;