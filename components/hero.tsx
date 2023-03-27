import Image from 'next/image';
import Head from 'next/head';
import {
  Box,
  Heading,

  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react';

export default function Hero() {
  return (
    <>
    

      <Container maxW={'8xl'}>
        <Stack
          as={Box}
         
          
          textAlign={'center'}
          bg={useColorModeValue('purple.600', 'gray.800')}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            
            fontWeight={800}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'130%'}>
             <Text color={'gray.50'}>Simple pricing for your business
             </Text>
          </Heading>
        
          <Text  
            fontWeight={500}
            fontSize={{ base: 'normal', sm: '2xl', md: '4xl' }}
            lineHeight={'32%'} color={'gray.50'}>
           plans that are carefully crafted to suite your business
           
           
           
          </Text>
</Stack>
             
                </Container>    </>
  );
}

