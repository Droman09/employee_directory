import React, { Component }from "react"
import SearchForm from "../SearchForm"
import Container from "../Container";
import API from "../utils/API";




class EmployeeInfo extends Component {
    state = {
        results: []
    }

    componentDidMount() {
        this.searchEmpl();
    }

    searchEmpl = () => {
        API.getSingleEmp()
        .then(res => {
            this.setState({ results: res.state.results})
            console.log(this.state.result)
        })
        .catch(err => console.log(err))
    }


    render() {
        return(
           

            <Container>

            </Container>
        )
    }

}



export default EmployeeInfo