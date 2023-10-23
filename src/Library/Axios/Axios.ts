import axios from "axios";

const BASE_BE = import.meta.env.VITE_BE_URL;
axios.defaults.baseURL = BASE_BE

const GetDataAxios = async (endpoint: string) => {
    const result = await axios.get(`${endpoint}`);
    return result;
}

export {
    GetDataAxios
}