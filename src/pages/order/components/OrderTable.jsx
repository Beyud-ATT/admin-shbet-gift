import useOrder from "../../../hooks/useOrder";
import { UniversalTable } from "../../../components/TableLayout";
import Pagination from "../../../components/Pagination";
import { Dropdown, Flex } from "antd";
import { BiDotsHorizontal } from "react-icons/bi";
import AcceptOrderModal from "./AcceptOrderModal";
import RejectOrderModal from "./RejectOrderModal";
import SendConfirmMailModal from "./SendConfirmMailModal";

export default function OrderTable() {
  const { data: orderData } = useOrder();
  const { data, pagination } = orderData?.data || {};

  const orderColumns = [
    {
      key: "customer",
      title: "Tài khoản",
      dataIndex: "customer",
      render: (customer) => customer?.account,
      width: 150,
    },
    {
      key: "product",
      title: "Sản phẩm",
      dataIndex: "product",
      render: (product) => product?.name,
      width: 200,
    },
    {
      key: "name",
      title: "Tên người nhận",
      dataIndex: "name",
      align: "center",
      width: 150,
    },
    {
      key: "phone",
      title: "Số điện thoại",
      dataIndex: "phone",
      align: "center",
      width: 150,
    },
    {
      key: "address",
      title: "Địa chỉ",
      dataIndex: "address",
      width: 350,
    },
    {
      key: "note",
      title: "Ghi chú",
      dataIndex: "note",
      width: 200,
    },
    {
      key: "createdAt",
      title: "Ngày tạo",
      dataIndex: "createdAt",
      type: "date",
      width: 200,
    },
    {
      key: "rejectedReason",
      title: "Lý do từ chối",
      dataIndex: "rejectedReason",
      align: "center",
      width: 200,
    },
    {
      key: "status",
      title: "Trạng thái",
      dataIndex: "status",
      align: "center",
      width: 200,
      fixed: "right",
      render: (value) => {
        return (
          <div
            className={`${value === "mailed" ? "animate-pulse" : ""} rounded-lg px-2 py-1 font-semibold text-white`}
            style={{
              backgroundColor:
                value === "pending"
                  ? "orange"
                  : value === "accepted"
                    ? "green"
                    : value === "rejected"
                      ? "red"
                      : "purple",
            }}
          >
            {value === "pending"
              ? "Đang chờ"
              : value === "accepted"
                ? "Chấp nhận"
                : value === "rejected"
                  ? "Từ chối"
                  : "Đã gửi mail"}
          </div>
        );
      },
    },
    {
      key: "action",
      title: "Hành động",
      dataIndex: "action",
      fixed: "right",
      align: "center",
      width: 200,
      render: (_, record) => (
        <Flex align="center" justify="center">
          <Dropdown
            menu={{
              items: [
                {
                  label: <SendConfirmMailModal record={record} />,
                  key: "sendMail",
                },
                {
                  label: <AcceptOrderModal record={record} />,
                  key: "accept",
                },
                {
                  label: <RejectOrderModal record={record} />,
                  key: "reject",
                },
              ],
            }}
            trigger={["click"]}
          >
            <div className="w-fit cursor-pointer rounded-lg border px-2">
              <BiDotsHorizontal className="text-2xl" />
            </div>
          </Dropdown>
        </Flex>
      ),
    },
  ];

  return (
    <>
      <UniversalTable
        data={data}
        columns={orderColumns}
        scroll={{ x: 500, y: 550 }}
        pagination={false}
      />
      <Pagination total={pagination?.total} />
    </>
  );
}
