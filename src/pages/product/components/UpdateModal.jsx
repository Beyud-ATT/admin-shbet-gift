import { RiEdit2Fill } from "react-icons/ri";
import CustomModal from "../../../components/CustomModal";
import {
  Button,
  Flex,
  Form,
  Input,
  InputNumber,
  Switch,
  Typography,
} from "antd";
import { useModal } from "../../../components/CompoundModal";
import { useEffect } from "react";
import useProductUpdate from "../../../hooks/useProductUpdate";

function UpdateModalContent({ record }) {
  const { closeModal } = useModal();
  const [form] = Form.useForm();
  const { mutate: updateProduct } = useProductUpdate();
  console.log(record);

  const handleAccept = (values) => {
    updateProduct({ id: record._id, body: values });
    closeModal();
  };

  useEffect(() => {
    if (record) {
      form.setFieldsValue(record);
    }
  }, [record, form]);

  return (
    <Form form={form} layout="vertical" onFinish={handleAccept}>
      <Typography.Title level={2} className="!my-3">
        Cập nhật sản phẩm
      </Typography.Title>
      <Form.Item name="status" label="Trạng thái">
        <Switch />
      </Form.Item>
      <Form.Item name="name" label="Tên sản phẩm">
        <Input placeholder="Nhập tên sản phẩm" />
      </Form.Item>
      <Form.Item name="description" label="Mô tả">
        <Input.TextArea rows={4} placeholder="Nhập mô tả" />
      </Form.Item>
      <Flex align="center" gap={10} className="w-full">
        <Form.Item
          name="requiredDeposit"
          label="Mức nạp yêu cầu"
          className="w-1/2"
        >
          <InputNumber
            min={0}
            className="!w-full"
            placeholder="Nhập mức nạp yêu cầu"
          />
        </Form.Item>
        <Form.Item
          name="requiredBet"
          label="Mức cược yêu cầu"
          className="w-1/2"
        >
          <InputNumber
            min={0}
            className="!w-full"
            placeholder="Nhập mức cược yêu cầu"
          />
        </Form.Item>
      </Flex>
      <Form.Item name="quantity" label="Số lượng">
        <InputNumber min={0} className="!w-full" placeholder="Nhập số lượng" />
      </Form.Item>
      <Flex align="center" gap={10} justify="end">
        <Button onClick={closeModal}>Hủy</Button>
        <Button type="primary" htmlType="submit">
          Cập nhật
        </Button>
      </Flex>
    </Form>
  );
}

export default function UpdateModal({ record, ...rest }) {
  return (
    <CustomModal
      trigger={
        <button className="ml-0.5 flex items-center justify-center gap-1 rounded-lg !bg-blue-500 p-2 hover:!bg-blue-700">
          <RiEdit2Fill className="text-lg text-white" />
        </button>
      }
      content={<UpdateModalContent record={record} />}
      {...rest}
    />
  );
}
