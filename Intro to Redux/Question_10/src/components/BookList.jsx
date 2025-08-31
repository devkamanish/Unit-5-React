import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Text, HStack, VStack } from "@chakra-ui/react";

const BookList = () => {
  const { books, filter } = useSelector(state => state);
  const dispatch = useDispatch();

  const filteredBooks = books.filter(book => {
    const matchStatus = filter.status === "all" ||
      (filter.status === "read" && book.read) ||
      (filter.status === "unread" && !book.read);

    const matchGenre = !filter.genre || book.genre === filter.genre;

    return matchStatus && matchGenre;
  });

  return (
    <VStack spacing={3} w="100%">
      {filteredBooks.map(book => (
        <Box key={book.id} borderWidth="1px" p={3} borderRadius="md" w="100%">
          <Text><b>{book.title}</b> by {book.author}</Text>
          <Text fontSize="sm" color="gray.500">Genre: {book.genre}</Text>
          <Text>Status: {book.read ? "✅ Read" : "❌ Unread"}</Text>
          <HStack spacing={2} mt={2}>
            <Button size="sm" colorScheme="blue" onClick={() => dispatch({ type: "TOGGLE_READ", payload: book.id })}>
              Mark {book.read ? "Unread" : "Read"}
            </Button>
            <Button size="sm" colorScheme="red" onClick={() => dispatch({ type: "DELETE_BOOK", payload: book.id })}>
              Delete
            </Button>
          </HStack>
        </Box>
      ))}
    </VStack>
  );
};

export default BookList;
