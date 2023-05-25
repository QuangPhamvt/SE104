import axiosClient from "./axiosClient"


const axiosDeposit = {
    //Lấy tất cả danh sách
    axiosGetAllDeposit: () => axiosClient.get("deposit"),
    //Lấy tất cả của 1 người
    axiosGetAllCustomerDeposit: (CMND) => axiosClient.get(`deposit/${CMND}`),
    //update lại dữ liệu
    axiosGetUpdateDeposit: () => axiosClient.get("deposit/update"),
}

export default axiosDeposit