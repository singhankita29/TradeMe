
import { Box, Button,Center,Stack, VStack,StackDivider,Checkbox, Flex, Heading, Image, SimpleGrid, Spacer, Text } 
from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import Pagination from '../Component/Pagination';

const Product = () => {
    const [data, setData] = useState([]); 
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [orderBy, setOrderBy] = useState([]);
    const [packetDigit, setPacketDigit] = useState([]);
    const [page, setPage] = useState(1);
  
    useEffect(() => {
      setLoading(true);
      fetch(
        `https://saya.net.in/api/jam2-trade/full?limit=12&page=${page}`
      )
        .then((items) => {
          return items.json();
        })
        .then((items) => {
          setData(items);
          setLoading(false); 
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }, [page]);
  
    function handleChange(change){
      setPage(change); 
    }
  
    console.log(data);  
   
    useEffect(() => {
      async function fetchData() {
        try {
          setLoading(true);
          const response = await 
          fetch(`https://saya.net.in/api/jam2-trade/full`);
          console.log(response);
          const data = await response.json();
          console.log(data.data)
          setOrderBy(data.data)
          setProducts(data.data);

          let result = data.data.map(p=>{
            return {packetDigit:p.packetDigit}
          })
          let store = [...new Set(result.map(obj => obj.packetDigit))];
    
          setPacketDigit([...store]);
          
           console.log(store)
        
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    }, []);

   

    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>An error occurred: {error.message}</p>;
    }

       
  let array = JSON.parse(localStorage.getItem("cachedItem")) || [];

    
   const handleClick = (data) => {
    array.push(data);
    console.log(data);
    localStorage.setItem("cachedItem", JSON.stringify(array));
    alert ("Item added Succsessfully")
   }

    const filterCategory = (e)=>{
        let product = orderBy.filter(o=>o.packetDigit===e.target.value);
        console.log(product)
        setProducts([...product]);
      }

    
      const  filterPrice = (e)=>{
        if(e.target.value === "low_to_high"){
          products.sort((a, b) => (a.price > b.price ? 1 : -1));
    
          setProducts([...products]);
        }
        else{
          products.sort((a, b) => (a.price < b.price ? 1 : -1));
          setProducts([...products]);
        }
        
      }
    

  return (
    <div>
        <div className="sidebar">
        <div className="sidebarContainer">
        {/* <select onChange={filterCategory}>
          <option>Filter By PacketDigit</option>
          {packetDigit && packetDigit.map(x=><option value={x}>{x}</option>)}
        </select> */}

        <select onChange={filterPrice}>
          <option>Sort By Price</option>
          <option value={'low_to_high'}>Low to high</option>
          <option value={'high_to_low'}>High to low</option>
        </select>
      </div>
    </div>
     <Box>
      <SimpleGrid
        columns={[1, 2, 4]}
        spacing={"10"}
        my={"10"}
        w={"95%"}
        m={"auto"}
      >
        {products?.map((data, i) => (
          <Box
            key={i}
            textAlign={"center"}
            px={"5"}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            py={"5"}
            bg="gray.200"
          >
            <Image w={"100%"} h={"30vh"} 
            src={'https://media.istockphoto.com/id/1300036753/photo/falling-antibiotics-healthcare-background.jpg?s=612x612&w=0&k=20&c=oquxJiLqE33ePw2qML9UtKJgyYUqjkLFwxT84Pr-WPk='} alt={data.id} />
            <br/>
          
           <VStack
            divider={<StackDivider borderColor='gray.200' />}
            spacing={1} align='stretch'
           >
             <Text mx={"5"}>{data.drugCode}</Text>
            <Text fontSize={"lg"} mx={"5"}>
              <b>Name : </b>{data.name}
            </Text>
            <Text mx={"5"}> <b>Price :</b>{data.price}</Text>
            <Text mx={"5"}><b>Packet :</b> {data.Packet}</Text>
            <Text mx={"5"}><b>PacketDigit :</b> {data.packet_digit}</Text>
            {/* <Checkbox defaultChecked onClick={() => handleClick(data)}>Checkbox</Checkbox> */}

            <Button colorScheme='blue' onClick={() => handleClick(data)}>Add to Cart</Button>

           </VStack>
          </Box>
        ))}
      </SimpleGrid>

    
      <Button>
      <Pagination handleChange={handleChange}  total= {data.totalPages}  current={page} /> 
      </Button>



    </Box>
    </div>
  )
}

export default Product