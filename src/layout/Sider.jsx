import { Menu } from "antd";
import { IoSettingsSharp } from "react-icons/io5";
import Logo from "../components/Logo";
import { useLocation, useNavigate } from "react-router";
import { useState } from "react";
import { AiFillProduct } from "react-icons/ai";
import { FaUserAstronaut } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const items = [
  {
    key: "order",
    icon: <FaCartShopping />,
    label: "Đơn hàng",
  },
  {
    key: "customer",
    icon: <FaUserAstronaut />,
    label: "Danh sách tham gia",
  },
  {
    key: "product",
    icon: <AiFillProduct />,
    label: "Sản phẩm / Qùa tặng",
  },
  {
    key: "settings",
    icon: <IoSettingsSharp />,
    label: "Cài đặt",
  },
];

export function Sider({ Layout, ...rest }) {
  const { Sider } = Layout;
  const navigate = useNavigate();
  const pathname = useLocation().pathname.replace("/", "");
  const [current, setCurrent] = useState(pathname);

  function handleMenuClick(item) {
    if (item?.key) {
      navigate(item?.key);
      setCurrent(item?.key);
    }
  }

  return (
    <Sider width="17%" {...rest}>
      <Logo />
      <Menu
        theme="dark"
        defaultSelectedKeys={[current]}
        defaultValue={current}
        items={items}
        className="!px-5"
        onClick={handleMenuClick}
      />
    </Sider>
  );
}
