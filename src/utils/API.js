import axios from "axios";
// eslint-disable-next-line
export default {
    getRandomEmp: function() {
        const response =  axios.get("https://randomuser.me/api/?results=10&nat=us,dk,fr,gb&seed=seed")
        console.log(response);
        return response
    },
    getFemaleEmp: function() {
        const response =  axios.get("https://randomuser.me/api/?results=10&gender=female&nat=us,dk,fr,gb&")
        console.log(response);
        return response
    },
    getMaleEmp: function() {
        const response =  axios.get("https://randomuser.me/api/?results=10&gender=male&nat=us,dk,fr,gb&")
        console.log(response);
        return response
    }
};