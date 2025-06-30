import CustomModal from "../../../components/CustomModal";
import { Flex, Typography } from "antd";
import { GiCyberEye } from "react-icons/gi";
import moment from "moment";

function OrderListModalContent({ record }) {
  return (
    <Flex vertical gap={20}>
      <Typography.Title level={2} className="!my-3">
        Danh sách đơn hàng
      </Typography.Title>
      {record?.orders?.map((order) => (
        <Flex
          vertical
          key={order._id}
          justify="center"
          className="rounded-lg border border-[var(--color-brand-primary)] !p-2"
        >
          <Typography.Text>
            <strong>Tên:</strong> {order.name}
          </Typography.Text>
          <Typography.Text>
            <strong>Số điện thoại:</strong> {order.phone}
          </Typography.Text>
          <Typography.Text>
            <strong>Địa chỉ:</strong> {order.address}
          </Typography.Text>
          <Typography.Text>
            <strong>Ghi chú:</strong> {order.note}
          </Typography.Text>
          <Typography.Text>
            <strong>Trạng thái:</strong> {order.status}
          </Typography.Text>
          <Typography.Text>
            <strong>Sản phẩm:</strong> {order.product.name}
          </Typography.Text>
          <Typography.Text>
            <strong>Ngày tạo:</strong>{" "}
            {moment(order.createdAt).utcOffset(7).format("DD/MM/YYYY HH:mm:ss")}
          </Typography.Text>
        </Flex>
      ))}
    </Flex>
  );
}

export default function OrderListModal({ record, ...rest }) {
  return (
    <CustomModal
      trigger={
        <button className="flex items-center justify-center rounded-full !bg-pink-500 p-2.5 hover:!bg-pink-700">
          <GiCyberEye className="text-lg text-white" />
        </button>
      }
      content={<OrderListModalContent record={record} />}
      {...rest}
    />
  );
}
