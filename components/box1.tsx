"use client"
import {  Container,List } from '@chakra-ui/react'
import { ListItem, Stack } from '@chakra-ui/react'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from "next/link"
import { Box } from "@chakra-ui/react"
import {useColorModeValue} from "@chakra-ui/react"
import { Text } from '@chakra-ui/react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (<>
 <Container maxW={'5xl'}>
        <Stack
          as={Box}
         
          
          textAlign={'center'}
          bg={useColorModeValue('gray.20', 'gray.800')}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>

<Stack    direction={'row'} align={'row'}>

   
         
<Image src="/group1.svg" alt=" my img" width="35" height="60"></Image>
<Text fontWeight={700} fontSize={18}>30 days money back Guarantee
</Text><Image src="/vector.svg" alt=" my img" width="35" height="60"></Image> 
 <Text fontWeight={700} fontSize={18}>No setup fees 100% hassle-free
 </Text>
 <Image src="/group.png" alt=" my img" width="35" height="60"></Image>
<Text fontWeight={700} fontSize={18}> No monthely subscription pay once and for all 
</Text>

</Stack> </Stack></Container> </>
)    

}
