import Image from 'next/image';
import {
    Box,
    Center,
    Text,
    Stack,
    Flex,
    List,
    ListItem,
    ListIcon,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';
  
  export default function Pricing() {
    return (<><Stack direction={'row'} align={'center'} justify={'center'}>
      <Center py={6}>
        <Box
          
          width={'378px'}
          height={'336px'}
          left={"331px"}
          top={'649px'}
          bg={useColorModeValue('gray.200', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Stack
            textAlign={'center'}
            p={6}
            color={useColorModeValue('gray.900', 'white')}
            align={'center'}>
            <Text
              fontSize={'lg'}
              fontWeight={800}
            
            lineHeight={'32%'}
              
             >premium PRO
            </Text>
            <Stack direction={'row'} align={'center'} justify={'center'}>
              <Text fontSize={'3xl'}></Text>
              <Text fontSize={'6xl'} fontWeight={800}>
              $329
              </Text>
              
                          </Stack>
          </Stack>
          <Stack direction={'row'} align={'center'} justify={'center'}>
              <Text fontSize={'3xl'}></Text>
              <Text fontSize={'6xl'} fontWeight={800}>
                </Text><Text color={'gray.800'}>billed just once</Text>
                </Stack>
            <Button
              mt={10}
              ml={5}
              mr={5}
              mb={10}
              w={'335px'}
              bg={'purple.600'}
              color={'white'}
              rounded={'xl'}
              boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
              _hover={{
                bg: 'purple.700',
              }}
              _focus={{
                bg: 'purple.500',
              }}>
              Get Started
            </Button>
          </Box>
        
      </Center>
   


 
      <Center py={6}>
        <Box
          maxW={'630px'}
          w={'936px'}
          h={'336px'}
          bg={useColorModeValue('gray.100', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Stack
            textAlign={'center'}
            p={6}
            color={useColorModeValue('gray.800', 'white')}
            align={'center'}>
             <Text fontWeight={700} fontSize={18}
               
 

              bg={useColorModeValue('green.50', 'green.900')}
              
    
              color={'black.500'}
              rounded={'full'}>
              Access these features when you get this pricing package for your business
            </Text>
           
          </Stack>
          <Stack direction={'row'} align={'center'} justify={'center'}>
          
          <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
            
              
       <Flex>
              <Image src="/tick.svg" alt=" my img" width="23" height="45"></Image>
              <Text fontWeight={700} fontSize={18} ml={2}>
                International calling and messaging API
              
               </Text>
                </Flex> 
            <Flex>  <Image src="/tick.svg" alt=" my img" width="23" height="45"></Image>
            <Text fontWeight={700} fontSize={18} ml={2}>     Additional phone numbers
              
              </Text>
                </Flex>
          <Flex>    <Image src="/tick.svg" alt=" my img" width="23" height="45"></Image>
          <Text fontWeight={700} fontSize={18} ml={2}>     Automated messages via Zapier
                           
          </Text>  </Flex>  <Flex>   <Image src="/tick.svg" alt=" my img" width="23" height="45"></Image>

               <Text fontWeight={700} fontSize={18} ml={2}> 24/7 support and consulting
               </Text></Flex>
            
              
                   
          </Box> </Stack>
           </Box>
      </Center></Stack>   </>
    );
}