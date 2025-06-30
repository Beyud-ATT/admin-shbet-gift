import { NoteTextSearch } from "./components/NoteTextSearch";
import OrderTable from "./components/OrderTable";
import { Flex } from "antd";
import { AddressTextSearch } from "./components/AddressTextSearch";
import { PhoneTextSearch } from "./components/PhoneTextSearch";
import { NameTextSearch } from "./components/NameTextSearch";
import { StatusSelectSearch } from "./components/StatusSelectSearch";

export default function Order() {
  return (
    <div>
      <Flex gap={10}>
        <NameTextSearch />
        <PhoneTextSearch />
        <AddressTextSearch />
        <NoteTextSearch />
        <StatusSelectSearch />
      </Flex>
      <OrderTable />
    </div>
  );
}
