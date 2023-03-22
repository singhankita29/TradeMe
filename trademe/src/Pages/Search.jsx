import React, { useState, useEffect } from "react";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { SearchIcon} from '@chakra-ui/icons'


function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (query.length > 0) {
      setLoading(true);
      fetch(`https://saya.net.in/api/jam2-trade/full?name=${query}`)
        .then((response) => response.json())
        .then((data) => {
          setResults(data);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <Box p={4}>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
        <Input
          placeholder="Search for name"
          value={query}
          onChange={handleInputChange}
        />
      </InputGroup>
      <Box mt={4}>
        {loading ? (
          <Spinner />
        ) : (
          <Stack spacing={4}>
            {results.map((result) => (
              <Box
                key={result.id}
                p={4}
                borderWidth="1px"
                borderRadius="md"
              >
                <Text fontWeight="bold">{result.name}</Text>
                <Text>{result.description}</Text>
              </Box>
            ))}
          </Stack>
        )}
      </Box>
    </Box>
  );
}

export default Search;
