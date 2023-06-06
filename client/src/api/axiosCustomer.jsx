import axiosClient from "./axiosClient"

const axiosCustomer = {
	axiosGetCustomer: (id) => axiosClient.get(`customer/${id}`),
}

export default axiosCustomer
