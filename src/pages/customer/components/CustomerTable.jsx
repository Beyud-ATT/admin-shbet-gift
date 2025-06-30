import moment from "moment";
import useCustomer from "../../../hooks/useCustomer";
import { UniversalTable } from "../../../components/TableLayout";
import Pagination from "../../../components/Pagination";
import { Flex } from "antd";
import OrderListModal from "./OrderListModal";

export default function CustomerTable() {
  const { data: customerData } = useCustomer();
  const { data, pagination } = customerData?.data || {};

  const customerColumns = [
    {
      key: "account",
      title: "Tài khoản",
      dataIndex: "account",
    },
    {
      key: "lastParticipateDate",
      title: "Lần tham gia gần nhất",
      dataIndex: "lastParticipateDate",
      render: (lastParticipateDate) => (
        <b>{moment(lastParticipateDate).format("DD/MM/YYYY HH:mm:ss")}</b>
      ),
    },
    {
      key: "orders",
      title: "Số lượng đơn hàng",
      dataIndex: "orders",
      render: (orders) => orders?.length,
    },
    {
      key: "action",
      title: "Hành động",
      dataIndex: "action",
      align: "center",
      render: (_, record) => (
        <Flex align="center" justify="center">
          <OrderListModal record={record} />
        </Flex>
      ),
    },
  ];

  return (
    <>
      <UniversalTable
        data={data}
        columns={customerColumns}
        scroll={{ x: 500, y: 550 }}
        pagination={false}
      />
      <Pagination total={pagination?.total} />
    </>
  );
}
