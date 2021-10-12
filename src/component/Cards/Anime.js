import React from "react";
import { Badge, Box, Image } from "@chakra-ui/react";
import { Heading, VStack, Text, SimpleGrid } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

function Anime({ id,title, genres, year, episodes, descriptions, cover_image }) {
  return (
    
    <Box
      maxW={["xs", "sm"]}
      shadow="md"
      borderWidth="1px"
      h={["200px", "300px", "350px"]}
      p={2}
      border="blue.500"
      overflow="hidden"
      borderRadius="xl"
    >
      <Link to={`${id}`}>
      <Heading
        p={3}
        color="royalblue"
        as="h4"
        fontSize={["10px", "sm", "20px"]}
        isTruncated
      >
        {title}
      </Heading>
      </Link>
      <SimpleGrid columns={2} spacing={10}>
        <Image
          boxSize="200px"
          objectFit="cover"
          src={cover_image}
          alt="cover image"
        />
        <VStack w="full" m={2} justifyContent="space-around">
          <Badge borderRadius="full" px="2" colorScheme="orange">
            Season : 10
          </Badge>
          <Badge borderRadius="full" px="2" colorScheme="blue">
            Year : {year}
          </Badge>
          <Badge borderRadius="full" px="2" colorScheme="orange">
            Episode : {episodes}
          </Badge>
          <Badge borderRadius="full" px="2" colorScheme="blue">
            {genres}
          </Badge>
        </VStack>
      </SimpleGrid>

      <Text p={1} marginTop={2} noOfLines={2}>
        {descriptions}
      </Text>
    </Box>
  );
}
export default Anime;
