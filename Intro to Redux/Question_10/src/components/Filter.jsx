import { useDispatch } from "react-redux";
import { Select, HStack } from "@chakra-ui/react";

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (key, value) => {
    dispatch({ type: "SET_FILTER", payload: { [key]: value } });
  };

  return (
    <HStack spacing={3} w="100%">
      <Select placeholder="Filter by Status" onChange={e => handleChange("status", e.target.value)}>
        <option value="all">All</option>
        <option value="read">Read</option>
        <option value="unread">Unread</option>
      </Select>
      <Select placeholder="Filter by Genre" onChange={e => handleChange("genre", e.target.value)}>
        <option value="Fantasy">Fantasy</option>
        <option value="Self-help">Self-help</option>
      </Select>
    </HStack>
  );
};

export default Filter;
