import {
  Col,
  Divider,
  Flex,
  Form,
  Input,
  InputNumber,
  Row,
  Switch,
  Typography,
} from "antd";
import useSettings from "../../../hooks/useSettings";
import { useEffect, useState } from "react";
import useSettingsUpdate from "../../../hooks/useSettingsUpdate";

export default function SettingForm() {
  const { data } = useSettings();
  const [form] = Form.useForm();
  const [blacklist, setBlacklist] = useState("");
  const { mutate } = useSettingsUpdate();

  console.log(data);

  const onFinish = (values) => {
    console.log(values);
    mutate({
      ...values,
      blacklist,
    });
  };

  useEffect(() => {
    const dataValue = data?.data?.data;
    if (dataValue) {
      form.setFieldsValue({ ...dataValue });
      setBlacklist(dataValue.blacklist);
    }
  }, [data, form]);

  return (
    <Form layout="vertical" form={form} onFinish={onFinish}>
      <Typography.Title level={2} className="!mb-5">
        Cài đặt chung
      </Typography.Title>

      <Form.Item name="status" label="Trạng thái">
        <Switch />
      </Form.Item>

      <Row gutter={[20, 20]}>
        <Col span={6}>
          <Form.Item name="vipLevel" label="Cấp VIP">
            <InputNumber
              min={0}
              className="!w-full"
              placeholder="Nhập cấp VIP"
            />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="homePageLink" label="Link trang chủ">
            <Input className="!w-full" placeholder="Nhập link trang chủ" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="promotionLink" label="Link khuyến mãi">
            <Input className="!w-full" placeholder="Nhập link khuyến mãi" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item name="blacklist" label="Danh sách đen">
        <Input.TextArea
          rows={4}
          placeholder="Nhập danh sách đen"
          className="!w-1/3"
          value={blacklist}
          onChange={(e) => setBlacklist(e.target.value)}
        />
        <p className="mt-1 text-xs text-red-500">
          Định dạng ví dụ: username,username,username...{" "}
          <strong>(các tài khoản cách nhau bởi dấu phẩy)</strong>
        </p>
      </Form.Item>

      <Divider />
      <Form.Item>
        <Flex justify="end">
          <button
            type="submit"
            className="cursor-pointer rounded-xl bg-[var(--color-brand-primary)] px-5 py-2 font-semibold text-white"
          >
            Lưu
          </button>
        </Flex>
      </Form.Item>
    </Form>
  );
}
