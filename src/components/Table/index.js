import React, { Component } from "react";
import API from "/Users/davidroman/Desktop/directory/src/utils/API.js";
import Container from "../Container";
import "./style.css";

// const sortTypes = {
//     up: {
//         class: 'sortFirstName',
//         fn: (a, b) => a.name.first - b.name.last
//     },
//     down: {
//         class: 'sortLastName',
//         fn: (a, b) => b.name.last - a.name.first
//     },
//     default: {
//         class: 'sort',
//         fn: (a, b) => a.name.first
//     }
// };


// onSortChange = () => {
//     const { currentSort } = this.state;
//     let nextSort;
//     if (currentSort === "up") nextSort = "down";
//     else if (currentSort === "down") nextSort = "up";
//     else if (currentSort === "default") nextSort = "down";

//     this.setState({
//         currentSort: nextSort
//     })

// }

class Table extends Component {
    state = {
        currentSort: "",
        results: [],
        error: ""

    }

    componentDidMount() {
        this.loadEmpl();
    }

    loadEmpl = () => {
        API.getRandomEmp()
            .then(res => {
                this.setState({ results: res.data.results })
                console.log(this.state.results)
            })
            .catch(err => console.log(err))
    }



    sortByName = () => {
        const sortedEmployee = this.state.results.sort((a, b) => {
            if (b.name.first > a.name.first) {
                return -1
            }
            if (a.name.first > b.name.first) {
                return 1
            }
            return 0

        })
        if (this.state.currentSort === "down") {
            sortedEmployee.reverse()
            this.setState({ currentSort: "up" })
        } else {
            this.setState({ currentSort: "down" })
        }
        this.setState({ results: sortedEmployee })
    }

    render() {
        return (
            <Container>
                <table className="styleTable">
                    <tr>
                        <th onClick={this.sortByName}>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                    </tr>
                    {this.state.results.map(info => {
                        return <tr>
                            <th>{info.name.first}</th>
                            <th>{info.name.last}</th>
                            <th>{info.dob.age}</th>
                            <th>{info.phone}</th>
                            <th>{info.email}</th>
                        </tr>
                    })}
                </table>
            </Container>
        )
    }



}

export default Table
