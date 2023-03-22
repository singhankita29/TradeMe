import React, { useState, useEffect } from "react";
import {
  Box,
  Stack,
  Text,
  VStack,
  Image,
  Flex,
  Heading,
  Button,
  Input,
} from "@chakra-ui/react";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (query.length > 0) {
      setLoading(true);
      fetch(`https://saya.net.in/api/jam2-trade/full?name=${query}&page=${page}`)
        .then((response) => response.json())
        .then((data) => {
          setResults(data.data);
          setTotalPages(data.total_pages);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    } else {
      setResults([]);
    }
  }, [query, page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <Box p={4}>
      <Stack spacing={4}>
        <Heading>Search Medicines</Heading>
        <Box>
          <Input
             isInvalid
            errorBorderColor='blue.400'
            variant='filled'
            type="text"
            placeholder="Search for name"
            value={query}
            onChange={handleInputChange}
          />
        </Box>
        {loading ? (
          <Text>Loading...</Text>
        ) : results.length > 0 ? (
          <VStack align="stretch">
            <Stack spacing={4}>
              {results.map((result) => (
                <Box
                  key={result.id}
                  borderWidth="1px"
                  borderRadius="md"
                  overflow="hidden"
                >
                  {/* <Image
                  src={'https://media.istockphoto.com/id/1300036753/photo/falling-antibiotics-healthcare-background.jpg?s=612x612&w=0&k=20&c=oquxJiLqE33ePw2qML9UtKJgyYUqjkLFwxT84Pr-WPk='} 
                  alt={result.name} /> */}
                  <Box p={4}>
                    <Flex justify="space-between" align="center">
                      <Heading size="md">{result.name}</Heading>
                      <Text fontWeight="bold" fontSize="lg">
                        {result.price}
                      </Text>
                    </Flex>
                    <Text mt={2}>{result.description}</Text>
                  </Box>
                </Box>
              ))}
            </Stack>
          
          </VStack>
        ) : (
          <Text>No results found</Text>
        )}
      </Stack>
    </Box>
  );
}

export default Search;