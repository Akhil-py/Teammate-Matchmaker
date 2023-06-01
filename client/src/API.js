import axios from 'axios';

const serverURL = "http://localhost:8000";

const API = {
    getUserData: function() {
        return axios.get(`${serverURL}/api/users`);
    },

    sendUserData: function(data) {
        console.log("Sent user data");
        return axios.post(`${serverURL}/api/users`, data);
    },

    sendLoginData: function(data) {
        console.log("Data: ", data);
        return axios.post(`${serverURL}/api/login`, data)
    },
    getUserData: function(user_id) {
        console.log("user_id: ", user_id);
        return axios.get(`${serverURL}/api/users?user_id=${user_id}`)
    },

    searchUser: function(data) {
        console.log("Data: ", data);
        const game = data.searchInfo.game
        const role = data.searchInfo.role
        const rank =data.searchInfo.rank
        const region = data.searchInfo.region
        
        return axios.get(`${serverURL}/api/players?game=${game}&role=${role}&rank=${rank}&region=${region}`)
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