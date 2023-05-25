import axios from 'axios';

const serverURL = "http://localhost:8000";

const API = {
    getUserData: function() {
        return axios.get(`${serverURL}/api/users`);
    },

    sendUserData: function(data) {
        console.log("Sent user data");
        return axios.post(`${serverURL}/api/users`, data);
    }

    /*getLeagueData: function() {
        return axios.get(`${serverURL}/api/league`);
    },

    sendLeagueData: function() {
        return axios.post(`${serverURL}/api/league`, data);
    },

    getValorantData: function() {
        return axios.get(`${serverURL}/api/valorant`);
    },

    sendValorantData: function() {
        return axios.post(`${serverURL}/api/valorant`, data);
    }*/
}

export default API;