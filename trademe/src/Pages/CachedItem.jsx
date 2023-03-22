import React from 'react'
import { Box, Flex,VStack,StackDivider, Heading, Icon, Image, SimpleGrid, Text } from "@chakra-ui/react";

const CachedItem = () => {

    let item = JSON.parse(localStorage.getItem("cachedItem"));
    console.log(item);

  return (
    <>
    <Box>
      {item?.length ? (
        <SimpleGrid columns={[1, 2, 3, 4]} spacing={"10"} bg={"transparent"}>
          {item.map((item, index) => (
            <Box
              bg={"gray.300"}
              key={index} 
              my={"5"}
              mx={"5"}
              borderRadius={"10"}
            >
              <Box mx={"5"} textAlign={"left"} py={"5"}>
               <Image w={"100%"} h={"50vh"} src={item.image} alt={item.id} />
               <Image w={"100%"} h={"30vh"} 
            src={'https://media.istockphoto.com/id/1300036753/photo/falling-antibiotics-healthcare-background.jpg?s=612x612&w=0&k=20&c=oquxJiLqE33ePw2qML9UtKJgyYUqjkLFwxT84Pr-WPk='} 
            alt={item.id} />
            <br/>
          
           <VStack
            divider={<StackDivider borderColor='gray.200' />}
            spacing={1} align='stretch'
           >
             <Text mx={"5"}>{item.drugCode}</Text>
            <Text fontSize={"lg"} mx={"5"}>
              <b>Name : </b>{item.name}
            </Text>
            <Text mx={"5"}> <b>Price :</b>{item.price}</Text>
            <Text mx={"5"}><b>Packet :</b> {item.Packet}</Text>
            <Text mx={"5"}><b>PacketDigit :</b> {item.packet_digit}</Text>

           </VStack>
              </Box>
        
              
            </Box>
          ))}
        </SimpleGrid>
      ) : (
        <Box my={"10"}>
          <Heading>No Products yet</Heading>
        </Box>
      )}
    </Box>
    </>
  )
}

export default CachedItem