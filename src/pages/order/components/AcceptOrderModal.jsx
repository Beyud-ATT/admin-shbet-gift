import { FaCheckCircle } from "react-icons/fa";
import CustomModal from "../../../components/CustomModal";
import { Button, Flex, Typography } from "antd";
import { useModal } from "../../../components/CompoundModal";
import useAcceptOrder from "../../../hooks/useOrderAccept";

function AcceptOrderModalContent({ record }) {
  const { closeModal } = useModal();
  const { mutate: acceptOrder } = useAcceptOrder();

  const handleAccept = () => {
    acceptOrder(record._id);
    closeModal();
  };

  return (
    <Flex vertical gap={10} className="!mt-5">
      <Typography.Title level={2}>
        Bạn sẽ chấp nhận đơn hàng của {record.customer?.account} ?
      </Typography.Title>

      <Typography.Text>
        <strong>Số điện thoại: </strong>
        {record.phone}
      </Typography.Text>
      <Typography.Text>
        <strong>Địa chỉ: </strong>
        {record.address}
      </Typography.Text>
      <Typography.Text>
        <strong>Ghi chú: </strong>
        {record.note || "Không có"}
      </Typography.Text>
      <Flex align="center" gap={10} justify="end">
        <Button onClick={closeModal}>Hủy</Button>
        <Button
          type="primary"
          className="!bg-green-500 font-semibold"
          onClick={handleAccept}
        >
          Chấp nhận
        </Button>
      </Flex>
    </Flex>
  );
}

export default function AcceptOrderModal({ record, ...rest }) {
  return (
    <CustomModal
      trigger={
        <button className="ml-0.5 flex items-center justify-center gap-1 !text-green-500 hover:!bg-transparent">
          <FaCheckCircle className="text-green-500" />
          Chấp nhận
        </button>
      }
      content={<AcceptOrderModalContent record={record} />}
      {...rest}
    />
  );
}
