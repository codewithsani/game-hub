import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'d64a3d3fd14a4269b12057d029a7916e'
    }
})