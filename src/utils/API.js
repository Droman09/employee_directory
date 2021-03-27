import axios from "axios";
// eslint-disable-next-line
export default {
    getRandomEmp: function() {
        const response =  axios.get("https://randomuser.me/api/?results=10")
        console.log(response);
        return response
    }
};