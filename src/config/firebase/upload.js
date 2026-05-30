import api from "../api/axios"

export const uploadImageAPI = (payload) => {
    return api.post('/uploads',payload)
}

export const fetchImages = () => {
    return api.get('/images')
}

export const removeImage = (img_id) => {
    return api.post(`/remove-image/${img_id}`)
}