import axios from 'axios';

const serverURL = "http://localhost:8000";

const API = {
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

    sendGameData: function(data) {
        console.log("DatagameInfo: ", data.gameInfo);
        return axios.post(`${serverURL}/api/users/${data.gameInfo.game}`, data.gameInfo);
    },

    searchUser: function(data) {
        console.log("Data: ", data);
        const game = data.searchInfo.game
        const role = data.searchInfo.role
        const rank =data.searchInfo.rank
        const region = data.searchInfo.region
        
        return axios.get(`${serverURL}/api/players?game=${game}&role=${role}&rank=${rank}&region=${region}`)
    },
    
    uploadProfilePicture: function(data){
        console.log("Data: ", data);
        return axios.put(`${serverURL}/api/users/profilePicture`,data);
    },

    deleteUser: function(data) {
        console.log("DATA!",data)
        const game = data.card.game;
        const user_id = data.card.userid;
        return axios.delete(`${serverURL}/api/users?user_id=${user_id}&game=${game}`);
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