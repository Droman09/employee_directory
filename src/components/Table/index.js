import React, { Component } from "react";
import API from "/Users/davidroman/Desktop/directory/src/utils/API.js";

class Table extends Component {
    state = {
        results: []
    }

    componentDidMount(){
      this.loadEmpl();
    }

    loadEmpl = () => {
        API.getRandomEmp()
            .then( res => {
            this.setState({ results: res.data.results})
            console.log(this.state.results)
        })
        .catch(err => console.log(err))
    }


    render() {
        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
    }



}

export default Table
