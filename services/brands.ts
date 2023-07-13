import ENV from "./environments"
import axiosConext from "./serviceConect"

export const getBrandsData = async () => {
    return await axiosConext(ENV.BASE_URL)
        .get("/carros/marcas")
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log("Err getBrands", err)
        })
}

export const getModelsByBrandData = async (id: string) => {
    return await axiosConext(ENV.BASE_URL)
        .get(`/carros/marcas/${id}/modelos`)
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log("Err getModels", err)
        })
}
