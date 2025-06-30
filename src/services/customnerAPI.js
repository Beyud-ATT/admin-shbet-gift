import axoisBase from "./axiosBase";
import { toast } from "react-toastify";

const ENDPOINT = "/customer";

async function getCustomer(params) {
  try {
    const response = await axoisBase.get(`${ENDPOINT}`, { ...params });
    return response;
  } catch (e) {
    toast.error(e?.response?.data?.message);
    throw new Error(e?.response?.data?.message);
  }
}

export { getCustomer };
