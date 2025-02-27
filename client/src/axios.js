import axios from "axios";

const instance = axios.create({
    baseURL: "https://ecommercefilter-ebdu5q0f7-hazals-projects-53a4fddc.vercel.app"
});

export default instance;