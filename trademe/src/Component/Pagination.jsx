import React,{useEffect,useState} from 'react'
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

const Pagination = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
  

    useEffect(() => {
      if (query.length > 0) {
        setLoading(true);
        fetch(`https://saya.net.in/api/jam2-trade/full?limit=12&page=${page}`)
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
    <div>
          <Stack direction="row" justify="center">
              {Array.from(Array(totalPages).keys()).map((pageNumber) => (
                <Flex>
                <Button
                  key={pageNumber + 1}
                  onClick={() => handlePageChange(pageNumber + 1)}
                  variant={page === pageNumber + 1 ? "solid" : "outline"}
                >
                  {pageNumber + 1}
                </Button>

           
        
              </Flex>
              ))}
            </Stack>
    </div>
  )
}

export default Pagination