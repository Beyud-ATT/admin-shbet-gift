import { toast } from "react-toastify";
import axoisBase from "./axiosBase";

const ENDPOINT = "/product";

async function getProducts(params) {
  try {
    const response = await axoisBase.get(`${ENDPOINT}`, params);
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw new Error(error?.response?.data?.message);
  }
}

async function updateProduct({ id, body }) {
  try {
    const response = await axoisBase.patch(`${ENDPOINT}/${id}`, body);
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw error;
  }
}

export { getProducts, updateProduct };
