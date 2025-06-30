import CustomModal from "../../../components/CustomModal";
import { Button, Flex, Form, Input, Typography } from "antd";
import { useModal } from "../../../components/CompoundModal";
import useOrderReject from "../../../hooks/useOrderReject";
import { IoIosCloseCircle } from "react-icons/io";

function RejectOrderModalContent({ record }) {
  const { closeModal } = useModal();
  const { mutate: rejectOrder } = useOrderReject();

  const handleReject = (values) => {
    console.log(values);
    console.log(record);
    rejectOrder({
      id: record._id,
      body: { rejectedReason: values.rejectedReason },
    });
    closeModal();
  };

  return (
    <Flex vertical gap={10} className="!mt-5">
      <Typography.Title level={2}>
        Bạn sẽ từ chối đơn hàng của {record.customer?.account} ?
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
      <Form onFinish={handleReject}>
        <Form.Item
          name="rejectedReason"
          label="Lý do từ chối"
          rules={[{ required: true, message: "Vui lòng nhập lý do từ chối" }]}
        >
          <Input.TextArea cols={30} rows={4} placeholder="Nhập lý do từ chối" />
        </Form.Item>
        <Form.Item>
          <Flex align="center" gap={10} justify="end">
            <Button onClick={closeModal}>Hủy</Button>
            <Button
              htmlType="submit"
              type="primary"
              className="!bg-red-500 font-semibold"
            >
              Từ chối
            </Button>
          </Flex>
        </Form.Item>
      </Form>
    </Flex>
  );
}

export default function RejectOrderModal({ record, ...rest }) {
  return (
    <CustomModal
      trigger={
        <button className="flex items-center justify-center gap-1 !text-red-500 hover:!bg-transparent">
          <IoIosCloseCircle className="text-lg !text-red-500" />
          Từ chối
        </button>
      }
      content={<RejectOrderModalContent record={record} />}
      {...rest}
    />
  );
}
