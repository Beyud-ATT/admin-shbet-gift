import axoisBase from "./axiosBase";
import { toast } from "react-toastify";

const ENDPOINT = "/order";

async function getOrders(params) {
  try {
    const response = await axoisBase.get(`${ENDPOINT}`, { ...params });
    return response;
  } catch (e) {
    toast.error(e?.response?.data?.message);
    throw new Error(e?.response?.data?.message);
  }
}

async function getOrderById(id) {
  try {
    const response = await axoisBase.get(`${ENDPOINT}/${id}`);
    return response;
  } catch (e) {
    toast.error(e?.response?.data?.message);
    throw new Error(e?.response?.data?.message);
  }
}

async function createOrder(body) {
  try {
    const response = await axoisBase.post(`${ENDPOINT}`, body);
    return response;
  } catch (e) {
    toast.error(e?.response?.data?.message);
    throw new Error(e?.response?.data?.message);
  }
}

async function updateOrder(id, body) {
  try {
    const response = await axoisBase.put(`${ENDPOINT}/${id}`, body);
    return response;
  } catch (e) {
    toast.error(e?.response?.data?.message);
    throw new Error(e?.response?.data?.message);
  }
}

async function deleteOrder(id) {
  try {
    const response = await axoisBase.delete(`${ENDPOINT}/${id}`);
    return response;
  } catch (e) {
    toast.error(e?.response?.data?.message);
    throw new Error(e?.response?.data?.message);
  }
}

async function acceptOrder(id) {
  try {
    const response = await axoisBase.patch(`${ENDPOINT}/${id}/accept`);
    return response;
  } catch (e) {
    toast.error(e?.response?.data?.message);
    throw new Error(e?.response?.data?.message);
  }
}

async function rejectOrder({ id, body }) {
  try {
    const response = await axoisBase.patch(`${ENDPOINT}/${id}/reject`, body);
    return response;
  } catch (e) {
    toast.error(e?.response?.data?.message);
    throw new Error(e?.response?.data?.message);
  }
}

async function sendConfirmMail({ id, body }) {
  try {
    const response = await axoisBase.patch(
      `${ENDPOINT}/${id}/send-confirm-mail`,
      body,
    );
    return response;
  } catch (e) {
    toast.error(e?.response?.data?.message);
    throw new Error(e?.response?.data?.message);
  }
}

export {
  getOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
  acceptOrder,
  rejectOrder,
  sendConfirmMail,
};
