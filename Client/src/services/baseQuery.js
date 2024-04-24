




export const prepareHeaders = (headers, { getState }) => {
    const token = getState().user?.token
    if (token) { headers.set('authorization', `Bearer ${token}`) }
    return headers
}

export const baseUrl = process.env.LOGIN_SERVER || "http://localhost:8080/v1"