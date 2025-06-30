import { Route, Routes, useNavigate } from "react-router";
import MainLayout from "./layout/Index";
import Login from "./pages/auth/Login";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Index";
import { Flex } from "antd";
import Settings from "./pages/settings/Index";
import Product from "./pages/product/Index";
import Order from "./pages/order/Index";
import Customer from "./pages/customer/Index";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="settings" element={<Settings />} />
          <Route path="product" element={<Product />} />
          <Route path="order" element={<Order />} />
          <Route path="customer" element={<Customer />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route
          path="*"
          element={
            <Flex
              vertical
              justify="center"
              align="center"
              gap={20}
              className="h-screen"
            >
              <p className="text-6xl font-bold text-[var(--color-brand-primary)] uppercase">
                404 rồi
              </p>
              <button
                onClick={() => navigate("/")}
                className="animate-wiggle cursor-pointer rounded-xl bg-[var(--color-brand-primary)] px-4 py-2 text-white uppercase hover:underline"
              >
                quay về đi
              </button>
            </Flex>
          }
        />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}
export default App;
