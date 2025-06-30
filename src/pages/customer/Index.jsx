import { Flex } from "antd";
import CustomerTable from "./components/CustomerTable";
import { AccountTextSearch } from "./components/AccountTextSearch";

export default function Customer() {
  return (
    <div>
      <Flex gap={10}>
        <AccountTextSearch />
      </Flex>
      <CustomerTable />
    </div>
  );
}
