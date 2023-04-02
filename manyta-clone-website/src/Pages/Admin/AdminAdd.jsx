// import { Box } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Nav from '../../Components/AdminPageComponents/AdminNavbar'
import { adddata, getdataone } from '../../redux/AdminReducer/Action';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Select,
  useDisclosure,
} from '@chakra-ui/react';


const initialstate={
  "rating": "",
  "rating_Count": "",
  "image": "",
  "brand": "",
  "description": "",
  "size": "",
  "discountedPrice": "",
  "originalPrice": "",
  "discount": "",
  "itemType": "",
  "gender": "",
  "title":""
}
const AdminAdd = () => {
  const [data,setdata]=React.useState(initialstate);
  const {isrequest}=useSelector((store)=>store.AdminReducer);
  const dispatch=useDispatch();
  const {
    isOpen: isaddopen,
    onOpen: onaddopen,
    onClose: onaddclose,
  } = useDisclosure();
  const handlechange=(e)=>{
    console.log(e.target.value);
    setdata({...data,[e.target.name]:e.target.value});
  }
  console.log(data);
  const handlesubmit=()=>{
    dispatch(adddata(data))
  }
  console.log(isrequest);
  return (
    <>
    <Nav/>
    <Box >
   



    <Flex
    
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
     <Stack border={'0px solid green'}
     boxShadow={' rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'}
      w={'40%'} spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Add Product</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to your database <Link color={'blue.400'}></Link> ✌️
          </Text>
        </Stack>
        
        <Box
          rounded={'lg'}
           bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          {isrequest?<img src='./check.gif' alt="" />: <Stack spacing={4}>
            <FormControl id="email">
            <FormLabel>Brand</FormLabel>
              <Input id="email" name="brand" type="text"  onChange={(e)=>handlechange(e)} />
              <FormLabel>Item Type</FormLabel>
              <Input id="email" name="itemType" type="text" onChange={(e)=>handlechange(e)} />
              <FormLabel>Description</FormLabel>
              <Input id="email" name="description" type="text"  onChange={(e)=>handlechange(e)} />
              <FormLabel>Size</FormLabel>
              <Input id="email" name="size" type="text" onChange={(e)=>handlechange(e)} />
              <FormLabel>Price</FormLabel>
              <Input id="email" name="discountedPrice" type="text"  onChange={(e)=>handlechange(e)} />
              <FormLabel>Discount</FormLabel>
              <Input id="email" name="discount" type="text" onChange={(e)=>handlechange(e)} />
              <FormLabel>Category</FormLabel>
              {/* <Input id="email"  /> */}
              <Select name="gender" type="text"  onChange={(e)=>handlechange(e)} placeholder='Select option'>
  <option value='Men'>Men</option>
  <option value='Women'>Women</option>
  <option value='Kids'>Kids</option>
  <option value='Home'>Home</option>
</Select>
              <FormLabel>Image</FormLabel>
              <Input id="email" name="image" type="text"  onChange={(e)=>handlechange(e)} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
               
              </Stack>
              <Button
              onClick={()=>{handlesubmit();}}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Add Product
              </Button>
            </Stack>
          </Stack>}
        </Box>
      </Stack>
    </Flex>

    </Box>
    </>
  )
}

export default AdminAdd