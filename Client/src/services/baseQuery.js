


import {REACT_APP_LOGIN_SERVER_URL} from "../constants"

export const prepareHeaders = (headers, { getState }) => {
    const token = getState().user?.token
    if (token) { headers.set('authorization', `Bearer ${token}`) }
    return headers
}

export const baseUrl = REACT_APP_LOGIN_SERVER_URL