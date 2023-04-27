import { Box ,HStack,Input,Text, Button} from '@chakra-ui/react'
import React from 'react'

import { ArrowForwardIcon } from '@chakra-ui/icons'
import Services from './Services'
import { useContext} from 'react'
import { theamcontext } from './Contextcomp/Context'
import { Link } from 'react-router-dom'

function Home() {
  let{login,setlogin,TrueLogin}= useContext(theamcontext)
  return (
    <Box>
        <Box m="60px" >
            <Text fontSize="24px" fontWeight="medium">
              Hassle_free Shipping Solutions
            </Text>
            <Text>
                Compare,book and mannage your freight across the world's top logistics providers ,all on one platform
            </Text>
        </Box>
        <Box boxShadow='dark-lg' p='4' rounded='md' bg='white'  w="80%" textAlign="center" m="auto"  box-shadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <HStack  >
                <Input variant="unstyled" placeholder="origin,Port,City" required>
                    
                </Input>
                <Input variant="unstyled" placeholder='Destination,Port,City' required>
                </Input>
                
                <Input variant="unstyled" placeholder="Select Date and Time"
                     size="md"
                   type="datetime-local"  required >
                </Input><Input variant="unstyled" placeholder='Load' required>
                </Input>
                
                <Link to="/booking">
                <Button backgroundColor="#6B46C1"   >
               < ArrowForwardIcon w="30px"/>
                </Button>
                </Link>
               
               

            </HStack>
             
        </Box>
        <Box fontSize="24px" fontWeight="medium" mt="36px" mb="15px">Services</Box>
        <HStack>
            <Services   H="Freight Service" P="Open new Opportunites to grow your busniess ,Enter new market and discover new
            countitnents,We are with you ,door-t0-door
            
            "/>
            <Services  H="Business Services" P="We support Your goal for growth with cargo insurance
             ,online payments and paperless workflow.Take your bussiness to the next level"/>
               <Services H="Freight Service" P="Open new Opportunites to grow your busniess ,Enter new market and discover new
            countitnents,We are with you ,door-to-door
            
            "/>
            <Services  H="Business Services" P="We support Your goal for growth with cargo insurance
             ,online payments and paperless workflow.Take your bussiness to the next level"/>
        </HStack>
    </Box>
  )
}

export default Home
