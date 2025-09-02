import { Box, Flex, Heading, Text, Avatar, Stack } from "@chakra-ui/react";

const testimonials = [
  {
    title: "Efficient Collaborating",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
    name: "Jane Cooper",
    role: "CEO at ABC Corporation",
    img: "https://i.pravatar.cc/150?img=1",
  },
  {
    title: "Intuitive Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
    name: "Jane Cooper",
    role: "CEO at ABC Corporation",
    img: "https://i.pravatar.cc/150?img=2",
  },
  {
    title: "Mindblowing Service",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
    name: "Jane Cooper",
    role: "CEO at ABC Corporation",
    img: "https://i.pravatar.cc/150?img=3",
  },
];

export default function Testimonials() {
  return (
    <Box bg="gray.100" py={12} px={6}>
      <Box textAlign="center" mb={10}>
        <Heading size="lg" mb={2}>
          Our Clients Speak
        </Heading>
        <Text color="gray.600">
          We have been working with clients around the world
        </Text>
      </Box>

      <Flex
        direction={{ base: "column", md: "row" }}
        justify="center"
        align="center"
        gap={6}
      >
        {testimonials.map((t, idx) => (
          <Box
            key={idx}
            bg="white"
            p={6}
            rounded="lg"
            shadow="md"
            maxW="sm"
            textAlign="center"
          >
            <Heading size="md" mb={2}>
              {t.title}
            </Heading>
            <Text color="gray.600" mb={4}>
              {t.desc}
            </Text>
            <Stack direction="column" align="center">
              <Avatar name={t.name} src={t.img} />
              <Text fontWeight="bold">{t.name}</Text>
              <Text fontSize="sm" color="gray.500">
                {t.role}
              </Text>
            </Stack>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
