
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
  Input
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {useDebounce} from "../../Components/AdminPageComponents/SearchHook";
import { useSearchParams } from "react-router-dom";
// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//     {children}
//   </Link>
// );

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
const [searchparams,setsearchparams]=useSearchParams();
  // const { isOpen, onOpen, onClose } = useDisclosure();

 const handlechange=(e)=>{
console.log(e.target.value);
let obj={brand:e.target.value};
if(e.target.value){
  setsearchparams(obj)
}
else{
  searchparams.delete("brand")
  setsearchparams(searchparams)
}
 }
 
 const debounce=useDebounce(handlechange,2000);
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex  h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Flex w={'40%'} gap={'3rem'} justifyContent={'space-evenly'}>
           <Link style={{ textDecoration: 'none' }} href={'/adminhome'}><Text  fontSize={'2xl'} fontWeight={'bold'} marginRight={'3rem'}>Home</Text></Link> 
           <Link style={{ textDecoration: 'none' }} href={'/adminfundsorders'}><Text fontSize={'2xl'} fontWeight={'bold'}>Funds</Text></Link>
           <Link style={{ textDecoration: 'none' }} href={'/adminaddproducts'}><Text noOfLines={[1]} fontSize={'2xl'} fontWeight={'bold'}>Add Products</Text></Link> 
           
          </Flex>
         <Flex boxShadow={'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'} _hover={{w:'40%'}} w={'25%'} transition={'width 0.5s ease-out'}> <Input onChange={(e)=>debounce(e)} variant='filled' placeholder='Search Products' /></Flex>
          <Flex alignItems={'center'}>
            <Stack gap direction={'row'} spacing={7}>
              <Button  onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
                           <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'./Logo.jpg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'./Logo.jpg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}