import ENV from "./environments"
import axiosConext from "./serviceConect"

export const postLogin = async (data: { user: string; password: string }) => {
    return await axiosConext(ENV.BASE_URL_LOGIN)
        .post(``, data)
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log("err postLogin", err)
        })
}
