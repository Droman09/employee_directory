import React, { Component } from "react";
import API from "/Users/davidroman/Desktop/directory/src/utils/API.js";
import Container from "../Container";

class Table extends Component {
    state = {
        results: [],
        error : ""
        
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
            <Container>
                <table>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                    </tr>
                    {this.state.results.map(info => {
                       return <tr>
                            <th>{info.name.first}</th>
                        </tr>
                    })}
                </table>
            </Container>
        )
    }



}

export default Table
