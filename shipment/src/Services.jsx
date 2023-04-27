import { Box, HStack ,VStack,Text} from '@chakra-ui/react'
import React from 'react'

function Services({H,P}) {
  return (
    
      
    <Box p="10px" m="10px" width="24%" >
      <VStack boxShadow='dark-lg' p='4' rounded='md' bg='white'  w="80%" textAlign="center" m="auto" >
       <Text fontSize="20px" fontWeight="medium">{H}</Text>
       <Box border="1px solid black" width="85%"></Box>
       <Text  textAlign="start">{P }</Text>
      </VStack>
    </Box>
  )
}

export default Services
