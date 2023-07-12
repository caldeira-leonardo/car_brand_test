import axios from "axios"

const axiosConext = (baseURL: string) => {
    return axios.create({
        baseURL,
    })
}

export default axiosConext
