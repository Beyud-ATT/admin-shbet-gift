import { Flex, Tag } from "antd";
import useProduct from "../../../hooks/useProduct";
import { UniversalTable } from "../../../components/TableLayout";
import Pagination from "../../../components/Pagination";
import UpdateModal from "./UpdateModal";

export default function ProductTable() {
  const { data: productData } = useProduct();
  const { data, pagination } = productData?.data || {};

  const productColumns = [
    {
      key: "name",
      title: "Tên sản phẩm",
      dataIndex: "name",
    },
    {
      key: "slug",
      title: "Slug",
      dataIndex: "slug",
    },
    {
      key: "description",
      title: "Mô tả",
      dataIndex: "description",
    },
    {
      key: "requiredDeposit",
      title: "Mức nạp yêu cầu",
      dataIndex: "requiredDeposit",
      align: "center",
    },
    {
      key: "requiredBet",
      title: "Mức cược yêu cầu",
      dataIndex: "requiredBet",
      align: "center",
    },
    {
      key: "quantity",
      title: "Số lượng",
      dataIndex: "quantity",
      align: "center",
      render: (quantity) => (
        <p
          className={`font-bold ${quantity > 0 ? "text-green-500" : "animate-bounce text-xl text-red-500"}`}
        >
          {quantity}
        </p>
      ),
    },
    {
      key: "status",
      title: "Trạng thái",
      dataIndex: "status",
      align: "center",
      render: (status) => {
        return (
          <Tag color={status ? "green" : "red"}>
            {status ? "Đang hoạt động" : "Không hoạt động"}
          </Tag>
        );
      },
    },
    {
      key: "action",
      title: "Hành động",
      dataIndex: "action",
      align: "center",
      render: (_, record) => (
        <Flex align="center" justify="center">
          <UpdateModal record={record} />
        </Flex>
      ),
    },
  ];

  return (
    <>
      <UniversalTable
        data={data}
        columns={productColumns}
        scroll={{ x: 500, y: 550 }}
        pagination={false}
      />
      <Pagination total={pagination?.total} />
    </>
  );
}
