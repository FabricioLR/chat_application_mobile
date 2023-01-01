import axios from "axios"

//"https://chatapplication.onrender.com/"
//"http://localhost:4000"
const api = axios.create({
    baseURL: "http://192.168.3.50:4000"
})

export default api