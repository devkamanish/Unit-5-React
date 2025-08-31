
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Input, Button, VStack } from "@chakra-ui/react";

const BookForm = () => {
  const [book, setBook] = useState({ title: "", author: "", genre: "" });
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!book.title || !book.author) return;
    dispatch({ type: "ADD_BOOK", payload: book });
    setBook({ title: "", author: "", genre: "" });
  };

  return (
    <VStack spacing={3} w="100%">
      <Input placeholder="Title" value={book.title} onChange={e => setBook({ ...book, title: e.target.value })}/>
      <Input placeholder="Author" value={book.author} onChange={e => setBook({ ...book, author: e.target.value })}/>
      <Input placeholder="Genre" value={book.genre} onChange={e => setBook({ ...book, genre: e.target.value })}/>
      <Button colorScheme="teal" onClick={handleAdd}>Add Book</Button>
    </VStack>
  );
};

export default BookForm;

