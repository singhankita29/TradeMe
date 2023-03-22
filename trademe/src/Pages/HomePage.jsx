import { Box, Center,Text, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import bgImage from "../Images/bgImage.avif";

const HomePage = () => {
  return (
    <Box
    backgroundImage={`url(${bgImage})`}
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    backgroundSize="cover"
    height="100vh"
    width="100%"
  >
    <Box textAlign="center" pt="6rem">
      <Heading size="2xl" color="black">
        Welcome to my website!
      </Heading>
      <Text fontSize="xl" color="black" mt="2rem">
        Here you can find all the information you need about me.
      </Text>
    </Box>
  </Box>
  )
}

export default HomePage