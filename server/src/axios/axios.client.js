import axios from "axios";

const get = async (url, config) => {
    const response = await axios.get(url);
    return response.data;
}

export default {get};