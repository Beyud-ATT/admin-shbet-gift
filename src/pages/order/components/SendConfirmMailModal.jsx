import CustomModal from "../../../components/CustomModal";
import { Button, Flex, Typography } from "antd";
import { useModal } from "../../../components/CompoundModal";
import { MdOutgoingMail } from "react-icons/md";
import useOrderSendConfirmMail from "../../../hooks/useOrderSendConfirmMail";
import { MAIL_CONTENT, MAIL_SUBJECT } from "../../../utils/constants";

function SendConfirmMailModalContent({ record }) {
  const { closeModal } = useModal();
  const { mutate: sendConfirmMail } = useOrderSendConfirmMail();

  console.log(record);

  const handleSendConfirmMail = () => {
    const content = MAIL_CONTENT.replace(
      "[[account]]",
      record.customer?.account,
    ).replace("[[address]]", record.address);

    sendConfirmMail({
      id: record._id,
      body: {
        account: record.customer?.account,
        subject: MAIL_SUBJECT,
        content,
      },
    });

    closeModal();
  };

  return (
    <Flex vertical gap={10} className="!mt-5">
      <Typography.Title level={2}>
        Bạn sẽ gửi xác nhận đơn hàng của {record.customer?.account} ?
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
          className="!bg-yellow-500 font-semibold"
          onClick={handleSendConfirmMail}
        >
          Gửi
        </Button>
      </Flex>
    </Flex>
  );
}

export default function SendConfirmMailModal({ record, ...rest }) {
  return (
    <CustomModal
      trigger={
        <button className="flex w-full items-center justify-center gap-1 !text-yellow-500 hover:!bg-transparent">
          <MdOutgoingMail className="text-lg text-yellow-500" />
          Gửi xác nhận
        </button>
      }
      content={<SendConfirmMailModalContent record={record} />}
      {...rest}
    />
  );
}
