import axios from "axios";

const axiosClient = axios.create({
    baseURL:
        process.env.REACT_APP_BACKEND_API_URL || "http://localhost:5000/api",
    headers: {
        "Content-Type": "application/json",
    },
});
export default axiosClient;
