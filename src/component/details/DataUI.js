import React from 'react';
import { Box, Heading, SimpleGrid, Text, VStack,StackDivider,Link } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Comments from './../Comment/Comments';


function DataUI({trailer,year,duration,coverImage}) {
    return (
        <>
          <Heading>title</Heading>
          <SimpleGrid columns={2} spacing="10px">
            <Box
              maxW="xl"
              shadow="xl"
              borderWidth="1px"
              h="350px"
              p={2}
              border="blue.500"
              overflow="hidden"
              borderRadius="xl"
            >
              <Image src={coverImage} alt="" fit />
            </Box>
    
            <Box
              maxW="xl"
              shadow="xl"
              borderWidth="1px"
              h="350px"
              p={2}
              border="blue.500"
              overflow="hidden"
              borderRadius="xl"
            >
              <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}>
                <Text>Duration : {duration}</Text>
                <Text>Year : {year}</Text>
                <Link href={trailer} isExternal>
                  TrailerUrl <ExternalLinkIcon mx="2px" />
                </Link>
                </VStack>
                <Comments/>
            </Box>
          </SimpleGrid>
        </>
    )
}

export default DataUI
