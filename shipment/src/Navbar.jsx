import { Box,Button,HStack,Text, useConst } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { theamcontext } from './Contextcomp/Context'

function Navbar() {
 let{login,setlogin,TrueLogin}= useContext(theamcontext)
 console.log(login)
  return (
    <Box m="20px" >
        <HStack spacing="65%">
            <Text fontSize="30px" fontWeight="medium">  Ship<span style={{color:"#6B46C1"}}>mate.</span>  


            </Text>
            <HStack spacing="10px">
              
              <Button backgroundColor="#6B46C1" color="white" p="0 30px" onClick={()=>{
               setlogin(false)
              }}>Login</Button>
              
           
            <Button border="1px solid #6B46C1"  p="0 40px">Learn more</Button>
            </HStack>
            
         
        </HStack>
    </Box>
      
    
  )
}

export default Navbar
