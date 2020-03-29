import Axios from "axios";

const api = Axios.create({
    baseURL: 'http://192.168.25.180:3333'
})

export default api