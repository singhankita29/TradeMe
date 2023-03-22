import { Box, Center, Flex, Heading} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";


const Navbar = ({ colorMode}) => {
  return (
    
    <Flex
      justifyContent={"space-around"}
      fontSize={"lg"}
      fontWeight={"bold"}
      bg={colorMode === "light" ? "black" : "blue.400"}
      h={"8vh"}
      alignItems={"center"}
    >
      <Box color={"white"}>
        <Link to="/">Home</Link>
      </Box>
      <Box color={"white"}>
      <Link to="/product">Product</Link>
      </Box>
      <Box color={"white"}>
      <Link to="/cached">CachedItem</Link>
      </Box> 
    </Flex>
   
    
  );
};

export default Navbar;
