import React from "react";
import {
  Box,
  Avatar,
  Text,
  VStack,
  HStack,
  Button,
  Tag,
  Divider,
  Badge,
} from "@chakra-ui/react";

function ProfileCard() {
  return (
    <Box
      maxW="sm"
      mx="auto"
      mt={10}
      p={6}
      borderRadius="lg"
      boxShadow="lg"
      textAlign="center"
      bg="white"
    >
      {/* Avatar with status */}
      <Box position="relative" display="inline-block">
        <Avatar
          size="xl"
          name="Lindsey James"
          src="https://randomuser.me/api/portraits/women/65.jpg"
        />
        <Badge
          boxSize={4}
          borderRadius="full"
          bg="green.400"
          border="2px solid white"
          position="absolute"
          bottom={2}
          right={2}
        />
      </Box>

      {/* Name and Username */}
      <VStack spacing={1} mt={4}>
        <Text fontSize="xl" fontWeight="bold">
          Lindsey James
        </Text>
        <Text color="gray.500">@lindsey_jam3s</Text>
      </VStack>

      {/* Bio */}
      <Text mt={3} fontSize="sm" color="gray.600">
        Actress, musician, songwriter and artist. PM for work inquires or{" "}
        <Text as="span" color="blue.500" fontWeight="medium">
          #tag
        </Text>{" "}
        me in your posts
      </Text>

      {/* Tags */}
      <HStack spacing={2} mt={4} flexWrap="wrap" justify="center">
        <Tag>#ART</Tag>
        <Tag>#PHOTOGRAPHY</Tag>
        <Tag>#MUSIC</Tag>
      </HStack>

      <Divider my={4} />

      {/* Buttons */}
      <HStack spacing={4} justify="center">
        <Button variant="outline" borderRadius="full" px={6}>
          Message
        </Button>
        <Button colorScheme="blue" borderRadius="full" px={6}>
          Follow
        </Button>
      </HStack>
    </Box>
  );
}

export default ProfileCard;
