import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8080/csc105_backend_war_exploded/",
    withCredentials: true,

});
export default instance;
